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
export declare type SLStudyGroupCardOverridesProps = {
    SLStudyGroupCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Group name"?: PrimitiveOverrideProps<TextProps>;
    "Class Name"?: PrimitiveOverrideProps<TextProps>;
    "Group Owner: hjha@ucsc.edu"?: PrimitiveOverrideProps<TextProps>;
    "Number of Members: 20"?: PrimitiveOverrideProps<TextProps>;
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu. Urna id volutpat lacus laoreet non curabitur gravida arcu. Morbi non arcu risus quis varius quam quisque id diam. Mi proin sed libero enim sed faucibus. Ultricies tristique nulla aliquet enim tortor at auctor urna."?: PrimitiveOverrideProps<TextProps>;
    "Accepting Members: True"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SLStudyGroupCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    SLStudyGroupCard?: any;
} & {
    overrides?: SLStudyGroupCardOverridesProps | undefined | null;
}>;
export default function SLStudyGroupCard(props: SLStudyGroupCardProps): React.ReactElement;
