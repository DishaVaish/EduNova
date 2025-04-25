import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function FormControls({ formControls = [], formData, setFormData }) {
  function renderComponentByType(getControlItem) {
    if (!getControlItem || !getControlItem.name) return null;

    const currentControlItemValue = formData?.[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        return (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value={currentControlItemValue}
            onChange={(e) =>
              setFormData({ ...formData, [getControlItem.name]: e.target.value })
            }
          />
        );

      case "select":
        return (
          <Select
            value={currentControlItemValue}
            onValueChange={(value) =>
              setFormData({ ...formData, [getControlItem.name]: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options?.map((optionItem) => (
                <SelectItem key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            value={currentControlItemValue}
            onChange={(e) =>
              setFormData({ ...formData, [getControlItem.name]: e.target.value })
            }
          />
        );

      default:
        return (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value={currentControlItemValue}
            onChange={(e) =>
              setFormData({ ...formData, [getControlItem.name]: e.target.value })
            }
          />
        );
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controleItem) =>
        controleItem?.name ? (
          <div key={controleItem.name}>
            <Label htmlFor={controleItem.name}>{controleItem.label}</Label>
            {renderComponentByType(controleItem)}
          </div>
        ) : null
      )}
    </div>
  );
}

export default FormControls;
