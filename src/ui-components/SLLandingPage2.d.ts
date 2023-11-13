/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SLLandingPage2OverridesProps = {
    SLLandingPage2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13629766592"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13629766593"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37429766594"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424113"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424114?: MyIconProps;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
    "Create your StudyLink account. It only takes a few minutes, and you'll be ready to discover the power of collaborative learning."?: PrimitiveOverrideProps<TextProps>;
    "Frame 37329766597"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424116"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424117?: MyIconProps;
    "Find or Create a Group"?: PrimitiveOverrideProps<TextProps>;
    "Explore existing study groups or start your own. Specify your major and university/college to find the perfect group for you."?: PrimitiveOverrideProps<TextProps>;
    "Frame 393"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37429766601"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039403233"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39403234?: MyIconProps;
    "Ask to Join or Invite Members"?: PrimitiveOverrideProps<TextProps>;
    "Send requests to join groups that match your interests, or invite fellow students to your group. Collaborate, share, and succeed together."?: PrimitiveOverrideProps<TextProps>;
    "Frame 37329766604"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424110"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424111?: MyIconProps;
    "Share and Schedule"?: PrimitiveOverrideProps<TextProps>;
    "Share study materials, notes, and resources within your groups. Easily plan and manage study sessions that fit your schedule."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SLLandingPage2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SLLandingPage2OverridesProps | undefined | null;
}>;
export default function SLLandingPage2(props: SLLandingPage2Props): React.ReactElement;
