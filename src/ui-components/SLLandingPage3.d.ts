/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SLLandingPage3OverridesProps = {
    SLLandingPage3?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Join StudyLink Today"?: PrimitiveOverrideProps<TextProps>;
    "Unlock your academic potential and boost your learning experience. Sign up for StudyLink now and make your studies more engaging and effective."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SLLandingPage3Props = React.PropsWithChildren<Partial<FlexProps> & {
    colorMode?: "Default";
} & {
    overrides?: SLLandingPage3OverridesProps | undefined | null;
}>;
export default function SLLandingPage3(props: SLLandingPage3Props): React.ReactElement;
