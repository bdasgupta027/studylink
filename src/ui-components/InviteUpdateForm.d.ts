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
export declare type InviteUpdateFormInputValues = {
    sender?: string;
    receiver?: string;
    studygroupid?: string;
};
export declare type InviteUpdateFormValidationValues = {
    sender?: ValidationFunction<string>;
    receiver?: ValidationFunction<string>;
    studygroupid?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InviteUpdateFormOverridesProps = {
    InviteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sender?: PrimitiveOverrideProps<TextFieldProps>;
    receiver?: PrimitiveOverrideProps<TextFieldProps>;
    studygroupid?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InviteUpdateFormProps = React.PropsWithChildren<{
    overrides?: InviteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    invite?: any;
    onSubmit?: (fields: InviteUpdateFormInputValues) => InviteUpdateFormInputValues;
    onSuccess?: (fields: InviteUpdateFormInputValues) => void;
    onError?: (fields: InviteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InviteUpdateFormInputValues) => InviteUpdateFormInputValues;
    onValidate?: InviteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InviteUpdateForm(props: InviteUpdateFormProps): React.ReactElement;
