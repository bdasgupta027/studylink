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
export declare type AnnouncementUpdateFormInputValues = {
    title?: string;
    username?: string;
    date?: string;
    announcement?: string;
};
export declare type AnnouncementUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    announcement?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnnouncementUpdateFormOverridesProps = {
    AnnouncementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    announcement?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnnouncementUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnnouncementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    announcement?: any;
    onSubmit?: (fields: AnnouncementUpdateFormInputValues) => AnnouncementUpdateFormInputValues;
    onSuccess?: (fields: AnnouncementUpdateFormInputValues) => void;
    onError?: (fields: AnnouncementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnnouncementUpdateFormInputValues) => AnnouncementUpdateFormInputValues;
    onValidate?: AnnouncementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnnouncementUpdateForm(props: AnnouncementUpdateFormProps): React.ReactElement;
