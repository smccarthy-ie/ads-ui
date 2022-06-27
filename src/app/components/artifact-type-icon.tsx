import React, {FunctionComponent} from "react";
import "./artifact-type-icon.css";
import {ArtifactTypes} from "@app/models";

/**
 * Properties
 */
export type ArtifactTypeIconProps = {
    type: string;
    isShowIcon?: boolean; // defaults to true
    isShowLabel?: boolean; // defaults to false
}


export const ArtifactTypeIcon: FunctionComponent<ArtifactTypeIconProps> = ({type, isShowIcon, isShowLabel}: ArtifactTypeIconProps) => {
    const getTitle = (): string => {
        let title: string = type;
        switch (type) {
            case ArtifactTypes.AVRO:
                title = "Avro Schema";
                break;
            case ArtifactTypes.PROTOBUF:
                title = "Protobuf Schema";
                break;
            case ArtifactTypes.JSON:
                title = "JSON Schema";
                break;
            case ArtifactTypes.OPENAPI:
                title = "OpenAPI Definition";
                break;
            case ArtifactTypes.ASYNCAPI:
                title = "AsyncAPI Definition";
                break;
            case ArtifactTypes.GRAPHQL:
                title = "GraphQL Definition";
                break;
            case ArtifactTypes.KCONNECT:
                title = "Kafka Connect Schema";
                break;
            case ArtifactTypes.WSDL:
                title = "WSDL";
                break;
            case ArtifactTypes.XSD:
                title = "XML Schema";
                break;
            case ArtifactTypes.XML:
                title = "XML";
                break;
        }
        return title;
    };

    const getLabel = (): string => {
        let title: string = type;
        switch (type) {
            case ArtifactTypes.AVRO:
                title = "Avro";
                break;
            case ArtifactTypes.PROTOBUF:
                title = "Protobuf";
                break;
            case ArtifactTypes.JSON:
                title = "JSON schema";
                break;
            case ArtifactTypes.OPENAPI:
                title = "OpenAPI";
                break;
            case ArtifactTypes.ASYNCAPI:
                title = "AsyncAPI";
                break;
            case ArtifactTypes.GRAPHQL:
                title = "GraphQL";
                break;
            case ArtifactTypes.KCONNECT:
                title = "Kafka Connect";
                break;
            case ArtifactTypes.WSDL:
                title = "WSDL";
                break;
            case ArtifactTypes.XSD:
                title = "XML Schema";
                break;
            case ArtifactTypes.XML:
                title = "XML";
                break;
        }
        return title;
    };

    const getClassNames = (): string => {
        let classes: string = "artifact-type-icon";
        if (isShowLabel) {
            classes += " has-label";
        }
        if (isShowIcon !== false) {
            classes += " has-icon";
            switch (type) {
                case ArtifactTypes.AVRO:
                    classes += " avro-icon24";
                    break;
                case ArtifactTypes.PROTOBUF:
                    classes += " protobuf-icon24";
                    break;
                case ArtifactTypes.JSON:
                    classes += " json-icon24";
                    break;
                case ArtifactTypes.OPENAPI:
                    classes += " oai-icon24";
                    break;
                case ArtifactTypes.ASYNCAPI:
                    classes += " aai-icon24";
                    break;
                case ArtifactTypes.GRAPHQL:
                    classes += " graphql-icon24";
                    break;
                case ArtifactTypes.KCONNECT:
                    classes += " kconnect-icon24";
                    break;
                case ArtifactTypes.WSDL:
                    classes += " xml-icon24";
                    break;
                case ArtifactTypes.XSD:
                    classes += " xml-icon24";
                    break;
                case ArtifactTypes.XML:
                    classes += " xml-icon24";
                    break;
            }
        }
        if (isShowIcon && !isShowLabel) {
            classes += " icon-only";
        }
        return classes;
    }

    const renderLabel = (): React.ReactNode | undefined => {
        if (isShowLabel) {
            return <span>{getLabel()}</span>
        } else {
            return undefined;
        }
    };

    return (
        <div className={getClassNames()} title={getTitle()} children={renderLabel()} />
    );
}
