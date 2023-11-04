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
export declare type ProfileCardCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    major?: string;
    image?: string;
    classesEnrolled?: string;
};
export declare type ProfileCardCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    major?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    classesEnrolled?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCardCreateFormOverridesProps = {
    ProfileCardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    major?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    classesEnrolled?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileCardCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfileCardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfileCardCreateFormInputValues) => ProfileCardCreateFormInputValues;
    onSuccess?: (fields: ProfileCardCreateFormInputValues) => void;
    onError?: (fields: ProfileCardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileCardCreateFormInputValues) => ProfileCardCreateFormInputValues;
    onValidate?: ProfileCardCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileCardCreateForm(props: ProfileCardCreateFormProps): React.ReactElement;
