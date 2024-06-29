import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";

export default function App() {
  const iconClasses = "text-md text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown className="border-black-500 rounded-lg border-2">
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className=""
        >
          Features
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description hover:bg-slate-700">
        <DropdownItem
          shortcut="⌘C"
          description="Computer Vision Model"
          className="hover:bg-slate-200 p-2 rounded-sm"
          href="/predict"
        >
          Vision
        </DropdownItem>
        <DropdownItem
          key="VR Room"
          shortcut="⌘C"
          description="Virtual Toor - Healtcare Facility"
          className="hover:bg-slate-200 p-2 rounded-sm"
          href="/room"
        >
          Virtual Healtcare
        </DropdownItem>
        <DropdownItem
          key="edit"
          shortcut="⌘E"
          showDivider
          description="File Complaint for any issue"
          className="hover:bg-slate-200 p-2 rounded-sm"
          href="/complaint"
        >
          File Complaint
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
