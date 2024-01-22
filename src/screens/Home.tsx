import React, { useEffect } from "react";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_IMAGE_REQUEST } from "../redux/actions";

export function Home() {
  const { image } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_IMAGE_REQUEST });
  }, []);

  return (
    <Image
      style={{
        height: 100,
        width: 100,
      }}
      source={{ uri: image }}
    />
  );
}
