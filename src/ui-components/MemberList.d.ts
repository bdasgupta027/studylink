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
export declare type MemberListOverridesProps = {
    MemberList?: PrimitiveOverrideProps<FlexProps>;
    MemberCard39103703?: PrimitiveOverrideProps<FlexProps>;
    Body39103704?: PrimitiveOverrideProps<FlexProps>;
    image39103705?: PrimitiveOverrideProps<ImageProps>;
    Scott39103706?: PrimitiveOverrideProps<TextProps>;
    MemberCard39103707?: PrimitiveOverrideProps<FlexProps>;
    Body39103708?: PrimitiveOverrideProps<FlexProps>;
    image39103709?: PrimitiveOverrideProps<ImageProps>;
    Scott39103710?: PrimitiveOverrideProps<TextProps>;
    MemberCard39103711?: PrimitiveOverrideProps<FlexProps>;
    Body39103712?: PrimitiveOverrideProps<FlexProps>;
    image39103713?: PrimitiveOverrideProps<ImageProps>;
    Scott39103714?: PrimitiveOverrideProps<TextProps>;
    MemberCard39103715?: PrimitiveOverrideProps<FlexProps>;
    Body39103716?: PrimitiveOverrideProps<FlexProps>;
    image39103717?: PrimitiveOverrideProps<ImageProps>;
    Scott39103718?: PrimitiveOverrideProps<TextProps>;
    MemberCard39103719?: PrimitiveOverrideProps<FlexProps>;
    Body39103720?: PrimitiveOverrideProps<FlexProps>;
    image39103721?: PrimitiveOverrideProps<ImageProps>;
    Scott39103722?: PrimitiveOverrideProps<TextProps>;
    MemberCard39103742?: PrimitiveOverrideProps<FlexProps>;
    Body39103743?: PrimitiveOverrideProps<FlexProps>;
    image39103744?: PrimitiveOverrideProps<ImageProps>;
    Scott39103745?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MemberListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MemberListOverridesProps | undefined | null;
}>;
export default function MemberList(props: MemberListProps): React.ReactElement;
