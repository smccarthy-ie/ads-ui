import React, {FunctionComponent, useState} from "react";
import {Draft} from "@app/models";
import {
    ActionList,
    ActionListItem,
    Button,
    Dropdown,
    DropdownItem, DropdownSeparator,
    Flex,
    FlexItem,
    KebabToggle
} from "@patternfly/react-core";
import "./draft-list-item.css";
import {ArtifactTypeIcon} from "@app/components/artifact-type-icon";

export type DraftListItemProps = {
    draft: Draft;
    onEdit: () => void;
    onDelete: () => void;
    onDownload: () => void;
}

export const DraftListItem: FunctionComponent<DraftListItemProps> = ({draft, onEdit, onDelete, onDownload}: DraftListItemProps) => {

    const [ isToggleOpen, setToggleOpen ] = useState(false);

    const onActionSelect: (event?: React.SyntheticEvent<HTMLDivElement>) => void = (event) => {
        // @ts-ignore
        const action: string = event?.target.attributes["data-id"].value;
        setToggleOpen(false);
        switch (action) {
            case "action-edit":
                onEdit();
                return;
            case "action-delete":
                onDelete();
                return;
            case "action-download":
                onDownload();
                return;
        }
    };

    return (
        <Flex className="draft-item">
            <FlexItem>
                <ArtifactTypeIcon type={draft.type} />
            </FlexItem>
            <FlexItem grow={{ default: "grow" }}>
                <div className="name">{draft.name}</div>
                <div className="summary">{draft.summary}</div>
            </FlexItem>
            <FlexItem>
                <ActionList>
                    <ActionListItem>
                        <Button variant="secondary" onClick={onEdit}>Edit</Button>
                    </ActionListItem>
                    <ActionListItem>
                        <Dropdown
                            onSelect={onActionSelect}
                            toggle={<KebabToggle onToggle={setToggleOpen} />}
                            isOpen={isToggleOpen}
                            isPlain
                            dropdownItems={
                                [
                                    <DropdownItem key="action-edit" data-id="action-edit">Edit</DropdownItem>,
                                    <DropdownItem key="action-download" data-id="action-download">Download</DropdownItem>,
                                    <DropdownSeparator key="action-sep-1" />,
                                    <DropdownItem key="action-delete" data-id="action-delete">Delete</DropdownItem>,
                                ]
                            }
                            position="right"
                        />
                    </ActionListItem>
                </ActionList>
            </FlexItem>
        </Flex>
    );
};
