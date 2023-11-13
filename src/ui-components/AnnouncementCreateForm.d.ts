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
export declare type AnnouncementCreateFormInputValues = {
    title?: string;
    username?: string;
    date?: string;
    announcement?: string;
};
export declare type AnnouncementCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    announcement?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementCreateFormOverridesProps = {
    AnnouncementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    announcement?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnnouncementCreateFormProps = React.PropsWithChildren<{
    overrides?: AnnouncementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnnouncementCreateFormInputValues) => AnnouncementCreateFormInputValues;
    onSuccess?: (fields: AnnouncementCreateFormInputValues) => void;
    onError?: (fields: AnnouncementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnnouncementCreateFormInputValues) => AnnouncementCreateFormInputValues;
    onValidate?: AnnouncementCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnnouncementCreateForm(props: AnnouncementCreateFormProps): React.ReactElement;
