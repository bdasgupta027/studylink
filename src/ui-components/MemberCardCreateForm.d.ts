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
export declare type MemberCardCreateFormInputValues = {
    username?: string;
};
export declare type MemberCardCreateFormValidationValues = {
    username?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemberCardCreateFormOverridesProps = {
    MemberCardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemberCardCreateFormProps = React.PropsWithChildren<{
    overrides?: MemberCardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MemberCardCreateFormInputValues) => MemberCardCreateFormInputValues;
    onSuccess?: (fields: MemberCardCreateFormInputValues) => void;
    onError?: (fields: MemberCardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemberCardCreateFormInputValues) => MemberCardCreateFormInputValues;
    onValidate?: MemberCardCreateFormValidationValues;
} & React.CSSProperties>;
export default function MemberCardCreateForm(props: MemberCardCreateFormProps): React.ReactElement;
