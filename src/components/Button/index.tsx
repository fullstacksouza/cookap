import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import { MotiView, useAnimationState } from "moti";
import { styles } from "./styles";
import { theme } from "../../styles/theme";
import { withSequence, withTiming } from "react-native-reanimated";

export function Button() {
  const cartAnimation = useAnimationState({
    default: { scale: 1 },
    clicked: {
      scale: 1.8,
    },
  });

  const handleAddToCart = () => {
    cartAnimation.transitionTo("clicked");
    const animationTimeout = setTimeout(() => {
      cartAnimation.transitionTo("default");
    }, 300);
  };
  return (
    <TouchableOpacity
      onPress={handleAddToCart}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>Add to Card</Text>

      <MotiView state={cartAnimation}>
        <Feather name="shopping-cart" size={24} color={theme.colors.white} />
      </MotiView>
    </TouchableOpacity>
  );
}
