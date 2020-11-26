export type DefaultAttributeValue = {};

function isDefaultAttributeValue(
  obj: string | DefaultAttributeValue
): obj is DefaultAttributeValue {
  return typeof obj !== "string";
}

function isStringArray(obj: any): obj is string[] {
  if (obj instanceof Array) {
    obj.forEach(function (item) {
      // maybe only check first obj?
      if (typeof item !== "string") return false;
    });

    return true;
  }

  return false;
}

type AttributeSet = {
  content?: string;
  [key: string]: string | DefaultAttributeValue | undefined;
};

export function setAttributes<T = HTMLElement>(
  id: string,
  values: AttributeSet
) {
  const element = document.getElementById(id);
  if (!element) return;

  for (const key in values) {
    let newValue = values[key];
    if (newValue === undefined || isDefaultAttributeValue(newValue)) {
      newValue = element.dataset[key] || "";
    }

    if (key === "content") element.textContent = "" + newValue;
    else element.setAttribute(key, "" + newValue);
  }

  return (element as unknown) as T;
}

export const setElementVisibility = (obj: HTMLElement, visible?: boolean) =>
  obj.classList.toggle("hidden", !visible);

const consolidateElements = (objs: HTMLElement[] | string[]) => {
  const targets: HTMLElement[] = [];

  if (isStringArray(objs))
    objs.map((id) => {
      const obj = document.getElementById(id);

      if (obj) targets.push(obj);
    });

  return targets;
};

export const hideElements = (objs: HTMLElement[] | string[]) => {
  consolidateElements(objs).map((obj) => setElementVisibility(obj, false));
};

export const showElements = (objs: HTMLElement[] | string[]) =>
  consolidateElements(objs).map((obj) => setElementVisibility(obj, true));
