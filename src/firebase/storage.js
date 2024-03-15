import { firebase, storage } from "./index";
import { currentConfig } from "../config";

// export type FirebaseStorage = firebase.storage.Storage;
// export type FirebaseStorageReference = firebase.storage.Reference;
// export type FirebaseStorageError = firebase.storage.FirebaseStorageError;
//
// export type BucketType = "default" | "photos";
// export type ImageResize = "100x50" | "200x150" | "700x450";

// type Buckets = Record<BucketType, FirebaseStorage>;

export const buckets = {
  default: storage,
  photos: firebase.app().storage(currentConfig.buckets.photos),
};

export const imageResizes = ["1000x1000", "700x700", "250x250"];
