/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SocialPostProps } from "./SocialPost";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementCollectionOverridesProps = {
    AnnouncementCollection?: PrimitiveOverrideProps<CollectionProps>;
    SocialPost?: SocialPostProps;
} & EscapeHatchProps;
export declare type AnnouncementCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => SocialPostProps;
} & {
    overrides?: AnnouncementCollectionOverridesProps | undefined | null;
}>;
export default function AnnouncementCollection(props: AnnouncementCollectionProps): React.ReactElement;
