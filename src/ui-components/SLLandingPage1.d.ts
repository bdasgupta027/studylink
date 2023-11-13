/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SLLandingPage1OverridesProps = {
    SLLandingPage1?: PrimitiveOverrideProps<ViewProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Eyebrow?: PrimitiveOverrideProps<TextProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    Right?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SLLandingPage1Props = React.PropsWithChildren<Partial<ViewProps> & {
    mode?: "Light";
} & {
    overrides?: SLLandingPage1OverridesProps | undefined | null;
}>;
export default function SLLandingPage1(props: SLLandingPage1Props): React.ReactElement;
