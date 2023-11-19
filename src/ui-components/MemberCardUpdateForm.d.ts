/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MemberCardUpdateFormInputValues = {
    username?: string;
    studyGroupId?: string;
};
export declare type MemberCardUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    studyGroupId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberCardUpdateFormOverridesProps = {
    MemberCardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    studyGroupId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemberCardUpdateFormProps = React.PropsWithChildren<{
    overrides?: MemberCardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    memberCard?: any;
    onSubmit?: (fields: MemberCardUpdateFormInputValues) => MemberCardUpdateFormInputValues;
    onSuccess?: (fields: MemberCardUpdateFormInputValues) => void;
    onError?: (fields: MemberCardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemberCardUpdateFormInputValues) => MemberCardUpdateFormInputValues;
    onValidate?: MemberCardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MemberCardUpdateForm(props: MemberCardUpdateFormProps): React.ReactElement;
