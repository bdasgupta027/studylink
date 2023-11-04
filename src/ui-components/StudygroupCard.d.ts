/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type StudygroupCardOverridesProps = {
    StudygroupCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Study Group Name"?: PrimitiveOverrideProps<TextProps>;
    "Class Name"?: PrimitiveOverrideProps<TextProps>;
    "23 Members"?: PrimitiveOverrideProps<TextProps>;
    "Owned By: owner@ucsc.edu"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StudygroupCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    studyGroupCard?: any;
} & {
    overrides?: StudygroupCardOverridesProps | undefined | null;
}>;
export default function StudygroupCard(props: StudygroupCardProps): React.ReactElement;
