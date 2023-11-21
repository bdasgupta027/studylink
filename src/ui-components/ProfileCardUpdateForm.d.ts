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
export declare type ProfileCardUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    major?: string;
    image?: string;
    classesEnrolled?: string;
    userId?: string;
};
export declare type ProfileCardUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    major?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    classesEnrolled?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCardUpdateFormOverridesProps = {
    ProfileCardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    major?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    classesEnrolled?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileCardUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfileCardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    profileCard?: any;
    onSubmit?: (fields: ProfileCardUpdateFormInputValues) => ProfileCardUpdateFormInputValues;
    onSuccess?: (fields: ProfileCardUpdateFormInputValues) => void;
    onError?: (fields: ProfileCardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileCardUpdateFormInputValues) => ProfileCardUpdateFormInputValues;
    onValidate?: ProfileCardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileCardUpdateForm(props: ProfileCardUpdateFormProps): React.ReactElement;
