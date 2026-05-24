import { sliderData, type SliderItem } from "@/data/slider.data";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from "react-native";

import SliderUI from "./SliderUI";

const { width } = Dimensions.get("window");

const SLIDER_WIDTH = width - 32;
const AUTO_SLIDE_TIME = 4000;
const SLIDE_ANIMATION_TIME = 1100;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const flatListRef = useRef<FlatList<SliderItem>>(null);
  const currentIndexRef = useRef(sliderData.length);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isUserSlidingRef = useRef(false);
  const scrollAnimationRef = useRef<Animated.CompositeAnimation | null>(null);

  const loopSliderData = useMemo(() => {
    if (sliderData.length <= 1) return sliderData;

    return [...sliderData, ...sliderData, ...sliderData];
  }, []);

  const getRealIndex = (index: number) => {
    return index % sliderData.length;
  };

  const updateIndicator = (index: number) => {
    if (sliderData.length <= 1) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex(getRealIndex(index));
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    scrollAnimationRef.current?.stop();
  };

  const silentScrollToIndex = (index: number) => {
    currentIndexRef.current = index;

    flatListRef.current?.scrollToOffset({
      offset: index * SLIDER_WIDTH,
      animated: false,
    });
  };

  const resetIfNeeded = (index: number) => {
    if (sliderData.length <= 1) return;

    const total = sliderData.length;

    if (index >= total * 2) {
      silentScrollToIndex(index - total);
    }

    if (index < total) {
      silentScrollToIndex(index + total);
    }
  };

  const smoothScrollToIndex = (index: number, onComplete?: () => void) => {
    const startOffset = currentIndexRef.current * SLIDER_WIDTH;
    const endOffset = index * SLIDER_WIDTH;

    const animatedValue = new Animated.Value(startOffset);

    const listenerId = animatedValue.addListener(({ value }) => {
      flatListRef.current?.scrollToOffset({
        offset: value,
        animated: false,
      });
    });

    scrollAnimationRef.current?.stop();

    scrollAnimationRef.current = Animated.timing(animatedValue, {
      toValue: endOffset,
      duration: SLIDE_ANIMATION_TIME,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    });

    scrollAnimationRef.current.start(({ finished }) => {
      animatedValue.removeListener(listenerId);

      if (finished) {
        onComplete?.();
      }
    });
  };

  const goToNextSlide = () => {
    if (sliderData.length <= 1 || isUserSlidingRef.current) return;

    const nextIndex = currentIndexRef.current + 1;

    currentIndexRef.current = nextIndex;
    updateIndicator(nextIndex);

    smoothScrollToIndex(nextIndex, () => {
      resetIfNeeded(nextIndex);
    });
  };

  const startAutoSlide = () => {
    if (sliderData.length <= 1 || timerRef.current) return;

    timerRef.current = setInterval(() => {
      goToNextSlide();
    }, AUTO_SLIDE_TIME);
  };

  const handleScrollBeginDrag = () => {
    isUserSlidingRef.current = true;
    stopAutoSlide();
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / SLIDER_WIDTH);

    updateIndicator(index);
  };

  const handleMomentumEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    if (sliderData.length <= 1) return;

    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / SLIDER_WIDTH);

    currentIndexRef.current = index;
    updateIndicator(index);

    requestAnimationFrame(() => {
      resetIfNeeded(index);
    });

    isUserSlidingRef.current = false;
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <View className="w-full">
      <FlatList
        ref={flatListRef}
        data={loopSliderData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <SliderUI item={item} sliderWidth={SLIDER_WIDTH} />
        )}
        horizontal
        pagingEnabled
        initialScrollIndex={sliderData.length > 1 ? sliderData.length : 0}
        getItemLayout={(_, index) => ({
          length: SLIDER_WIDTH,
          offset: SLIDER_WIDTH * index,
          index,
        })}
        snapToInterval={SLIDER_WIDTH}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={handleScrollBeginDrag}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumEnd}
        scrollEventThrottle={16}
      />

      <View className="mt-4 flex-row items-center justify-center gap-2">
        {sliderData.map((_, index) => (
          <View
            key={index}
            className={`h-2.5 rounded-full ${
              activeIndex === index
                ? "w-7 bg-[#8FB4FF]"
                : "w-2.5 bg-white/35"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default Slider;