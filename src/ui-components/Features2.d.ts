/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LandingPage2Props } from "./LandingPage2";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type Features2OverridesProps = {
    Features2?: PrimitiveOverrideProps<FlexProps>;
    LandingPage2?: LandingPage2Props;
} & EscapeHatchProps;
export declare type Features2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Features2OverridesProps | undefined | null;
}>;
export default function Features2(props: Features2Props): React.ReactElement;
