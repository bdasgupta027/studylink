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
export declare type StudyGroupCardUpdateFormInputValues = {
    groupName?: string;
    numMembers?: number;
    className?: string;
    acceptingMembers?: boolean;
    description?: string;
    groupOwner?: string;
    image?: string;
    memberList?: string[];
};
export declare type StudyGroupCardUpdateFormValidationValues = {
    groupName?: ValidationFunction<string>;
    numMembers?: ValidationFunction<number>;
    className?: ValidationFunction<string>;
    acceptingMembers?: ValidationFunction<boolean>;
    description?: ValidationFunction<string>;
    groupOwner?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    memberList?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudyGroupCardUpdateFormOverridesProps = {
    StudyGroupCardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    groupName?: PrimitiveOverrideProps<TextFieldProps>;
    numMembers?: PrimitiveOverrideProps<TextFieldProps>;
    className?: PrimitiveOverrideProps<TextFieldProps>;
    acceptingMembers?: PrimitiveOverrideProps<SwitchFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    groupOwner?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    memberList?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudyGroupCardUpdateFormProps = React.PropsWithChildren<{
    overrides?: StudyGroupCardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    studyGroupCard?: any;
    onSubmit?: (fields: StudyGroupCardUpdateFormInputValues) => StudyGroupCardUpdateFormInputValues;
    onSuccess?: (fields: StudyGroupCardUpdateFormInputValues) => void;
    onError?: (fields: StudyGroupCardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudyGroupCardUpdateFormInputValues) => StudyGroupCardUpdateFormInputValues;
    onValidate?: StudyGroupCardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StudyGroupCardUpdateForm(props: StudyGroupCardUpdateFormProps): React.ReactElement;
