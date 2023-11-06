/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type StudyGroupCardCreateFormInputValues = {
    groupName?: string;
    numMembers?: number;
    className?: string;
    description?: string;
    acceptingMembers?: boolean;
    groupOwner?: string;
    image?: string;
    memberList?: string[];
    accepting?: boolean;
};
export declare type StudyGroupCardCreateFormValidationValues = {
    groupName?: ValidationFunction<string>;
    numMembers?: ValidationFunction<number>;
    className?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    acceptingMembers?: ValidationFunction<boolean>;
    groupOwner?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    memberList?: ValidationFunction<string>;
    accepting?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudyGroupCardCreateFormOverridesProps = {
    StudyGroupCardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    groupName?: PrimitiveOverrideProps<TextFieldProps>;
    numMembers?: PrimitiveOverrideProps<TextFieldProps>;
    className?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    acceptingMembers?: PrimitiveOverrideProps<SwitchFieldProps>;
    groupOwner?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    memberList?: PrimitiveOverrideProps<TextFieldProps>;
    accepting?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type StudyGroupCardCreateFormProps = React.PropsWithChildren<{
    overrides?: StudyGroupCardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StudyGroupCardCreateFormInputValues) => StudyGroupCardCreateFormInputValues;
    onSuccess?: (fields: StudyGroupCardCreateFormInputValues) => void;
    onError?: (fields: StudyGroupCardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudyGroupCardCreateFormInputValues) => StudyGroupCardCreateFormInputValues;
    onValidate?: StudyGroupCardCreateFormValidationValues;
} & React.CSSProperties>;
export default function StudyGroupCardCreateForm(props: StudyGroupCardCreateFormProps): React.ReactElement;