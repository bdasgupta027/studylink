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
export declare type InviteCreateFormInputValues = {
    sender?: string;
    receiver?: string;
    studygroupid?: string;
};
export declare type InviteCreateFormValidationValues = {
    sender?: ValidationFunction<string>;
    receiver?: ValidationFunction<string>;
    studygroupid?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InviteCreateFormOverridesProps = {
    InviteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sender?: PrimitiveOverrideProps<TextFieldProps>;
    receiver?: PrimitiveOverrideProps<TextFieldProps>;
    studygroupid?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InviteCreateFormProps = React.PropsWithChildren<{
    overrides?: InviteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InviteCreateFormInputValues) => InviteCreateFormInputValues;
    onSuccess?: (fields: InviteCreateFormInputValues) => void;
    onError?: (fields: InviteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InviteCreateFormInputValues) => InviteCreateFormInputValues;
    onValidate?: InviteCreateFormValidationValues;
} & React.CSSProperties>;
export default function InviteCreateForm(props: InviteCreateFormProps): React.ReactElement;
