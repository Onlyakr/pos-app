"use client ";

import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

const AdjustButton = ({
  onAdd,
  onRemove,
}: {
  onAdd: () => void;
  onRemove: () => void;
}) => {
  return (
    <>
      <Button variant="destructive" size="icon" onClick={onRemove}>
        <Minus size={15} />
      </Button>
      <Button variant="destructive" size="icon" onClick={onAdd}>
        <Plus size={15} />
      </Button>
    </>
  );
};
export default AdjustButton;
