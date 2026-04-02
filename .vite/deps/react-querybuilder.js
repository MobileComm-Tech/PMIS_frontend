import {
  produce
} from "./chunk-ICEGDERP.js";
import {
  require_react
} from "./chunk-7JZAKNLV.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/react-querybuilder/dist/react-querybuilder.mjs
var React = __toESM(require_react(), 1);
var React2 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var React3 = __toESM(require_react(), 1);
var React4 = __toESM(require_react(), 1);
var React7 = __toESM(require_react(), 1);

// node_modules/react-querybuilder/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/react-querybuilder/dist/react-querybuilder.mjs
var import_react2 = __toESM(require_react(), 1);
var React5 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var React6 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_react14 = __toESM(require_react(), 1);
var import_react15 = __toESM(require_react(), 1);
var React8 = __toESM(require_react(), 1);
var React9 = __toESM(require_react(), 1);
var import_react16 = __toESM(require_react(), 1);
var React11 = __toESM(require_react(), 1);
var React10 = __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var ActionElement = ({
  className,
  handleOnClick,
  label,
  title,
  disabled,
  disabledTranslation,
  testID
}) => React.createElement(
  "button",
  {
    type: "button",
    "data-testid": testID,
    disabled: disabled && !disabledTranslation,
    className,
    title: disabledTranslation && disabled ? disabledTranslation.title : title,
    onClick: (e) => handleOnClick(e)
  },
  disabledTranslation && disabled ? disabledTranslation.label : label
);
ActionElement.displayName = "ActionElement";
var DragHandle = (0, import_react.forwardRef)(
  ({ className, label, title, testID }, dragRef) => React2.createElement("span", { "data-testid": testID, ref: dragRef, className, title }, label)
);
DragHandle.displayName = "DragHandle";
var placeholderName = "~";
var placeholderLabel = "------";
var defaultPlaceholderFieldName = placeholderName;
var defaultPlaceholderFieldLabel = placeholderLabel;
var defaultPlaceholderFieldGroupLabel = placeholderLabel;
var defaultPlaceholderOperatorName = placeholderName;
var defaultPlaceholderOperatorLabel = placeholderLabel;
var defaultPlaceholderOperatorGroupLabel = placeholderLabel;
var defaultJoinChar = ",";
var defaultTranslations = {
  fields: {
    title: "Fields",
    placeholderName: defaultPlaceholderFieldName,
    placeholderLabel: defaultPlaceholderFieldLabel,
    placeholderGroupLabel: defaultPlaceholderFieldGroupLabel
  },
  operators: {
    title: "Operators",
    placeholderName: defaultPlaceholderOperatorName,
    placeholderLabel: defaultPlaceholderOperatorLabel,
    placeholderGroupLabel: defaultPlaceholderOperatorGroupLabel
  },
  value: {
    title: "Value"
  },
  removeRule: {
    label: "x",
    title: "Remove rule"
  },
  removeGroup: {
    label: "x",
    title: "Remove group"
  },
  addRule: {
    label: "+Rule",
    title: "Add rule"
  },
  addGroup: {
    label: "+Group",
    title: "Add group"
  },
  combinators: {
    title: "Combinators"
  },
  notToggle: {
    label: "Not",
    title: "Invert this group"
  },
  cloneRule: {
    label: "⧉",
    title: "Clone rule"
  },
  cloneRuleGroup: {
    label: "⧉",
    title: "Clone group"
  },
  dragHandle: {
    label: "⁞⁞",
    title: "Drag handle"
  },
  lockRule: {
    label: "🔓",
    title: "Lock rule"
  },
  lockGroup: {
    label: "🔓",
    title: "Lock group"
  },
  lockRuleDisabled: {
    label: "🔒",
    title: "Unlock rule"
  },
  lockGroupDisabled: {
    label: "🔒",
    title: "Unlock group"
  },
  valueSourceSelector: {
    title: "Value source"
  }
};
var defaultOperators = [
  { name: "=", label: "=" },
  { name: "!=", label: "!=" },
  { name: "<", label: "<" },
  { name: ">", label: ">" },
  { name: "<=", label: "<=" },
  { name: ">=", label: ">=" },
  { name: "contains", label: "contains" },
  { name: "beginsWith", label: "begins with" },
  { name: "endsWith", label: "ends with" },
  { name: "doesNotContain", label: "does not contain" },
  { name: "doesNotBeginWith", label: "does not begin with" },
  { name: "doesNotEndWith", label: "does not end with" },
  { name: "null", label: "is null" },
  { name: "notNull", label: "is not null" },
  { name: "in", label: "in" },
  { name: "notIn", label: "not in" },
  { name: "between", label: "between" },
  { name: "notBetween", label: "not between" }
];
var defaultOperatorNegationMap = {
  "=": "!=",
  "!=": "=",
  "<": ">=",
  "<=": ">",
  ">": "<=",
  ">=": "<",
  beginsWith: "doesNotBeginWith",
  doesNotBeginWith: "beginsWith",
  endsWith: "doesNotEndWith",
  doesNotEndWith: "endsWith",
  contains: "doesNotContain",
  doesNotContain: "contains",
  between: "notBetween",
  notBetween: "between",
  in: "notIn",
  notIn: "in",
  notNull: "null",
  null: "notNull"
};
var defaultCombinators = [
  { name: "and", label: "AND" },
  { name: "or", label: "OR" }
];
var defaultCombinatorsExtended = [
  ...defaultCombinators,
  { name: "xor", label: "XOR" }
];
var standardClassnames = {
  queryBuilder: "queryBuilder",
  ruleGroup: "ruleGroup",
  header: "ruleGroup-header",
  body: "ruleGroup-body",
  combinators: "ruleGroup-combinators",
  addRule: "ruleGroup-addRule",
  addGroup: "ruleGroup-addGroup",
  cloneRule: "rule-cloneRule",
  cloneGroup: "ruleGroup-cloneGroup",
  removeGroup: "ruleGroup-remove",
  notToggle: "ruleGroup-notToggle",
  rule: "rule",
  fields: "rule-fields",
  operators: "rule-operators",
  value: "rule-value",
  removeRule: "rule-remove",
  betweenRules: "betweenRules",
  valid: "queryBuilder-valid",
  invalid: "queryBuilder-invalid",
  dndDragging: "dndDragging",
  dndOver: "dndOver",
  dndCopy: "dndCopy",
  dragHandle: "queryBuilder-dragHandle",
  disabled: "queryBuilder-disabled",
  lockRule: "rule-lock",
  lockGroup: "ruleGroup-lock",
  valueSource: "rule-valueSource",
  valueListItem: "rule-value-list-item",
  branches: "queryBuilder-branches"
};
var defaultControlClassnames = {
  queryBuilder: "",
  ruleGroup: "",
  header: "",
  body: "",
  combinators: "",
  addRule: "",
  addGroup: "",
  cloneRule: "",
  cloneGroup: "",
  removeGroup: "",
  notToggle: "",
  rule: "",
  fields: "",
  operators: "",
  value: "",
  removeRule: "",
  dragHandle: "",
  lockRule: "",
  lockGroup: "",
  valueSource: ""
};
var groupInvalidReasons = {
  empty: "empty",
  invalidCombinator: "invalid combinator",
  invalidIndependentCombinators: "invalid independent combinators"
};
var TestID = {
  rule: "rule",
  ruleGroup: "rule-group",
  inlineCombinator: "inline-combinator",
  addGroup: "add-group",
  removeGroup: "remove-group",
  cloneGroup: "clone-group",
  cloneRule: "clone-rule",
  addRule: "add-rule",
  removeRule: "remove-rule",
  combinators: "combinators",
  fields: "fields",
  operators: "operators",
  valueEditor: "value-editor",
  notToggle: "not-toggle",
  dragHandle: "drag-handle",
  lockRule: "lock-rule",
  lockGroup: "lock-group",
  valueSourceSelector: "value-source-selector"
};
var LogType = {
  parentPathDisabled: "action aborted: parent path disabled",
  pathDisabled: "action aborted: path is disabled",
  queryUpdate: "query updated",
  onAddRuleFalse: "onAddRule callback returned false",
  onAddGroupFalse: "onAddGroup callback returned false",
  onRemoveFalse: "onRemove callback returned false",
  add: "rule or group added",
  remove: "rule or group removed",
  update: "rule or group updated",
  move: "rule or group moved"
};
var InlineCombinator = ({
  component: CombinatorSelectorComponent,
  independentCombinators: _independentCombinators,
  ...props
}) => React3.createElement("div", { className: standardClassnames.betweenRules, "data-testid": TestID.inlineCombinator }, React3.createElement(CombinatorSelectorComponent, { ...props, testID: TestID.combinators }));
InlineCombinator.displayName = "InlineCombinator";
var NotToggle = ({
  className,
  handleOnChange,
  title,
  label,
  checked,
  disabled,
  testID
}) => React4.createElement("label", { "data-testid": testID, className, title }, React4.createElement(
  "input",
  {
    type: "checkbox",
    onChange: (e) => handleOnChange(e.target.checked),
    checked: !!checked,
    disabled
  }
), label);
NotToggle.displayName = "NotToggle";
var splitBy = (str, splitChar = defaultJoinChar) => typeof str === "string" ? str.split(`\\${splitChar}`).map((c) => c.split(splitChar)).reduce((prev, curr, idx) => {
  if (idx === 0) {
    return curr;
  }
  return [
    ...prev.slice(0, prev.length - 1),
    `${prev[prev.length - 1]}${splitChar}${curr[0]}`,
    ...curr.slice(1)
  ];
}, []) : [];
var joinWith = (strArr, joinChar = defaultJoinChar) => strArr.map((str) => `${str ?? ""}`.replaceAll(joinChar, `\\${joinChar}`)).join(joinChar);
var trimIfString = (val) => typeof val === "string" ? val.trim() : val;
var toArray = (v) => Array.isArray(v) ? v.map(trimIfString) : typeof v === "string" ? splitBy(v, defaultJoinChar).filter((s) => !/^\s*$/.test(s)).map((s) => s.trim()) : typeof v === "number" ? [v] : [];
var nullFreeArray = (arr) => arr.every(Boolean);
var isRuleGroup = (rg) => !!rg && typeof rg === "object" && "rules" in rg && Array.isArray(rg.rules);
var isRuleGroupType = (rg) => isRuleGroup(rg) && "combinator" in rg;
var isRuleGroupTypeIC = (rg) => isRuleGroup(rg) && !("combinator" in rg);
var processRuleOrStringOrRuleGroupIC = (r2) => typeof r2 === "object" && "rules" in r2 ? generateRuleGroupICWithConsistentCombinators(r2) : r2;
var generateRuleGroupICWithConsistentCombinators = (rg) => {
  const returnArray = [];
  const push = (r2) => returnArray.push(processRuleOrStringOrRuleGroupIC(r2));
  let startIndex = 0;
  for (let i = 0; i < rg.rules.length; i += 2) {
    if (rg.rules.length === 1) {
      push(rg.rules[0]);
    } else if (rg.rules[i + 1] === "and") {
      startIndex = i;
      let j = 1;
      while (rg.rules[startIndex + j] === "and") {
        i += 2;
        j += 2;
      }
      returnArray.push({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error TS can't keep track of odd/even indexes here
        rules: rg.rules.slice(startIndex, i + 1).map(processRuleOrStringOrRuleGroupIC)
      });
      i -= 2;
    } else if (rg.rules[i + 1] === "or") {
      if (i === 0 || i === rg.rules.length - 3) {
        if (i === 0 || rg.rules[i - 1] === "or") {
          push(rg.rules[i]);
        }
        push(rg.rules[i + 1]);
        if (i === rg.rules.length - 3) {
          push(rg.rules[i + 2]);
        }
      } else {
        if (rg.rules[i - 1] === "and") {
          push(rg.rules[i + 1]);
        } else {
          push(rg.rules[i]);
          push(rg.rules[i + 1]);
        }
      }
    }
  }
  if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error TS still thinks returnArray has length 0
    returnArray.length === 1 && typeof returnArray[0] === "object" && "rules" in returnArray[0]
  ) {
    return { ...rg, ...returnArray[0] };
  }
  return { ...rg, rules: returnArray };
};
var convertFromIC = (rg) => {
  const processedRG = generateRuleGroupICWithConsistentCombinators(rg);
  const rulesAsMixedList = processedRG.rules.map(
    (r2) => typeof r2 === "string" || !("rules" in r2) ? r2 : convertFromIC(r2)
  );
  const combinator = rulesAsMixedList.length < 2 ? "and" : rulesAsMixedList[1];
  const rules = rulesAsMixedList.filter((r2) => typeof r2 !== "string");
  return { ...processedRG, combinator, rules };
};
var convertToIC = (rg) => {
  const { combinator, ...queryWithoutCombinator } = rg;
  const rules = [];
  rg.rules.forEach((r2, idx, arr) => {
    if ("rules" in r2) {
      rules.push(convertToIC(r2));
    } else {
      rules.push(r2);
    }
    if (idx < arr.length - 1) {
      rules.push(combinator);
    }
  });
  return { ...queryWithoutCombinator, rules };
};
function convertQuery(query) {
  return isRuleGroupTypeIC(query) ? convertFromIC(query) : convertToIC(query);
}
var defaultValidator = (query) => {
  const result = {};
  const validateRule = (_rule) => {
  };
  const validateGroup = (rg) => {
    const reasons = [];
    if (rg.rules.length === 0) {
      reasons.push(groupInvalidReasons.empty);
    } else if (!("combinator" in rg)) {
      let invalidICs = false;
      for (let i = 0; i < rg.rules.length && !invalidICs; i++) {
        if (i % 2 === 0 && typeof rg.rules[i] === "string" || i % 2 === 1 && typeof rg.rules[i] !== "string" || i % 2 === 1 && typeof rg.rules[i] === "string" && !defaultCombinators.map((c) => c.name).includes(rg.rules[i])) {
          invalidICs = true;
        }
      }
      if (invalidICs) {
        reasons.push(groupInvalidReasons.invalidIndependentCombinators);
      }
    }
    if ("combinator" in rg && !defaultCombinators.map((c) => c.name).includes(rg.combinator) && rg.rules.length > 1) {
      reasons.push(groupInvalidReasons.invalidCombinator);
    }
    if (rg.id) {
      if (reasons.length) {
        result[rg.id] = { valid: false, reasons };
      } else {
        result[rg.id] = true;
      }
    }
    rg.rules.forEach((r2) => {
      if (typeof r2 === "string") {
      } else if ("rules" in r2) {
        validateGroup(r2);
      } else {
        validateRule(r2);
      }
    });
  };
  validateGroup(query);
  return result;
};
var isOptionGroupArray = (arr) => Array.isArray(arr) && arr.length > 0 && "options" in arr[0];
var getOption = (arr, name) => (isOptionGroupArray(arr) ? arr.flatMap((og) => og.options) : arr).find((op) => op.name === name);
var getFirstOption = (arr) => !Array.isArray(arr) || arr.length === 0 ? null : isOptionGroupArray(arr) ? arr[0].options[0].name : arr[0].name;
var filterFieldsByComparator = (field, fields, operator) => {
  if (!field.comparator) {
    const filterOutSameName = (f) => f.name !== field.name;
    if (isOptionGroupArray(fields)) {
      return fields.map((og) => ({
        ...og,
        options: og.options.filter(filterOutSameName)
      }));
    }
    return fields.filter(filterOutSameName);
  }
  const filterByComparator = (fieldToCompare) => {
    if (field.name === fieldToCompare.name) {
      return false;
    }
    if (typeof field.comparator === "string") {
      return field[field.comparator] === fieldToCompare[field.comparator];
    }
    return field.comparator(fieldToCompare, operator);
  };
  if (isOptionGroupArray(fields)) {
    return fields.map((og) => ({ ...og, options: og.options.filter(filterByComparator) })).filter((og) => og.options.length > 0);
  }
  return fields.filter(filterByComparator);
};
var numericRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
var isPojo = (obj) => obj === null || typeof obj !== "object" ? false : Object.getPrototypeOf(obj) === Object.prototype;
var parseNumber = (v, { parseNumbers }) => {
  if (typeof v === "bigint" || typeof v === "number") {
    return v;
  }
  return parseNumbers && (parseNumbers === "native" || numericRegex.test(v)) ? parseFloat(v) : v;
};
var mapSQLOperator = (op) => {
  switch (op.toLowerCase()) {
    case "null":
      return "is null";
    case "notnull":
      return "is not null";
    case "notin":
      return "not in";
    case "notbetween":
      return "not between";
    case "contains":
    case "beginswith":
    case "endswith":
      return "like";
    case "doesnotcontain":
    case "doesnotbeginwith":
    case "doesnotendwith":
      return "not like";
    default:
      return op;
  }
};
var mongoOperators = {
  "=": "$eq",
  "!=": "$ne",
  "<": "$lt",
  "<=": "$lte",
  ">": "$gt",
  ">=": "$gte",
  in: "$in",
  notIn: "$nin"
};
var celCombinatorMap = {
  and: "&&",
  or: "||"
};
var jsonLogicAdditionalOperators = {
  startsWith: (a, b) => typeof a === "string" && a.startsWith(b),
  endsWith: (a, b) => typeof a === "string" && a.endsWith(b)
};
var numerifyValues = (rg) => ({
  ...rg,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error TS doesn't keep track of odd/even indexes here
  rules: rg.rules.map((r2) => {
    if (typeof r2 === "string") {
      return r2;
    }
    if ("rules" in r2) {
      return numerifyValues(r2);
    }
    let { value } = r2;
    if (typeof value === "string") {
      value = parseNumber(value, { parseNumbers: true });
    }
    return { ...r2, value };
  })
});
var isValidValue = (v) => typeof v === "string" && v.length > 0 || typeof v === "number" && !isNaN(v) || typeof v !== "string" && typeof v !== "number";
var shouldRenderAsNumber = (v, parseNumbers) => parseNumbers && (typeof v === "number" || typeof v === "bigint" || typeof v === "string" && numericRegex.test(v));
var isValueProcessorLegacy = (vp) => vp.length >= 3;
var quoteFieldNamesWithArray = (quoteFieldNamesWith = ["", ""]) => Array.isArray(quoteFieldNamesWith) ? quoteFieldNamesWith : typeof quoteFieldNamesWith === "string" ? [quoteFieldNamesWith, quoteFieldNamesWith] : quoteFieldNamesWith ?? ["", ""];
var shouldNegate = (op) => /^(does)?not/i.test(op);
var escapeDoubleQuotes = (v, escapeQuotes) => typeof v !== "string" || !escapeQuotes ? v : v.replaceAll(`"`, `\\"`);
var defaultRuleProcessorCEL = ({ field, operator, value, valueSource }, { escapeQuotes, parseNumbers } = {}) => {
  const valueIsField = valueSource === "field";
  const operatorTL = operator.replace(/^=$/, "==");
  const useBareValue = typeof value === "number" || typeof value === "boolean" || typeof value === "bigint" || shouldRenderAsNumber(value, parseNumbers);
  switch (operatorTL) {
    case "<":
    case "<=":
    case "==":
    case "!=":
    case ">":
    case ">=":
      return `${field} ${operatorTL} ${valueIsField || useBareValue ? trimIfString(value) : `"${escapeDoubleQuotes(value, escapeQuotes)}"`}`;
    case "contains":
    case "doesNotContain": {
      const negate = shouldNegate(operatorTL) ? "!" : "";
      return `${negate}${field}.contains(${valueIsField ? trimIfString(value) : `"${escapeDoubleQuotes(value, escapeQuotes)}"`})`;
    }
    case "beginsWith":
    case "doesNotBeginWith": {
      const negate = shouldNegate(operatorTL) ? "!" : "";
      return `${negate}${field}.startsWith(${valueIsField ? trimIfString(value) : `"${escapeDoubleQuotes(value, escapeQuotes)}"`})`;
    }
    case "endsWith":
    case "doesNotEndWith": {
      const negate = shouldNegate(operatorTL) ? "!" : "";
      return `${negate}${field}.endsWith(${valueIsField ? trimIfString(value) : `"${escapeDoubleQuotes(value, escapeQuotes)}"`})`;
    }
    case "null":
      return `${field} == null`;
    case "notNull":
      return `${field} != null`;
    case "in":
    case "notIn": {
      const negate = shouldNegate(operatorTL);
      const valueAsArray = toArray(value);
      if (valueAsArray.length > 0) {
        return `${negate ? "!(" : ""}${field} in [${valueAsArray.map(
          (val) => valueIsField || shouldRenderAsNumber(val, parseNumbers) ? `${trimIfString(val)}` : `"${escapeDoubleQuotes(val, escapeQuotes)}"`
        ).join(", ")}]${negate ? ")" : ""}`;
      } else {
        return "";
      }
    }
    case "between":
    case "notBetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && !!valueAsArray[0] && !!valueAsArray[1]) {
        const [first, second] = valueAsArray;
        const firstNum = shouldRenderAsNumber(first, true) ? parseFloat(first) : NaN;
        const secondNum = shouldRenderAsNumber(second, true) ? parseFloat(second) : NaN;
        let firstValue = isNaN(firstNum) ? valueIsField ? `${first}` : `"${escapeDoubleQuotes(first, escapeQuotes)}"` : firstNum;
        let secondValue = isNaN(secondNum) ? valueIsField ? `${second}` : `"${escapeDoubleQuotes(second, escapeQuotes)}"` : secondNum;
        if (firstValue === firstNum && secondValue === secondNum && secondNum < firstNum) {
          const tempNum = secondNum;
          secondValue = firstNum;
          firstValue = tempNum;
        }
        if (operator === "between") {
          return `(${field} >= ${firstValue} && ${field} <= ${secondValue})`;
        } else {
          return `(${field} < ${firstValue} || ${field} > ${secondValue})`;
        }
      } else {
        return "";
      }
    }
  }
  return "";
};
var escapeDoubleQuotes2 = (v) => typeof v !== "string" ? v : v.replaceAll("\\", "\\\\").replaceAll(`"`, `\\"`);
var defaultRuleProcessorMongoDB = ({ field, operator, value, valueSource }, { parseNumbers } = {}) => {
  const valueIsField = valueSource === "field";
  const useBareValue = typeof value === "number" || typeof value === "boolean" || typeof value === "bigint" || shouldRenderAsNumber(value, parseNumbers);
  if (operator === "=" && !valueIsField) {
    return `{"${field}":${useBareValue ? trimIfString(value) : `"${escapeDoubleQuotes2(value)}"`}}`;
  }
  switch (operator) {
    case "<":
    case "<=":
    case "=":
    case "!=":
    case ">":
    case ">=": {
      const mongoOperator = mongoOperators[operator];
      return valueIsField ? `{"$expr":{"${mongoOperator}":["$${field}","$${value}"]}}` : `{"${field}":{"${mongoOperator}":${useBareValue ? trimIfString(value) : `"${escapeDoubleQuotes2(value)}"`}}}`;
    }
    case "contains":
      return valueIsField ? `{"$where":"this.${field}.includes(this.${value})"}` : `{"${field}":{"$regex":"${escapeDoubleQuotes2(value)}"}}`;
    case "beginsWith":
      return valueIsField ? `{"$where":"this.${field}.startsWith(this.${value})"}` : `{"${field}":{"$regex":"^${escapeDoubleQuotes2(value)}"}}`;
    case "endsWith":
      return valueIsField ? `{"$where":"this.${field}.endsWith(this.${value})"}` : `{"${field}":{"$regex":"${escapeDoubleQuotes2(value)}$"}}`;
    case "doesNotContain":
      return valueIsField ? `{"$where":"!this.${field}.includes(this.${value})"}` : `{"${field}":{"$not":{"$regex":"${escapeDoubleQuotes2(value)}"}}}`;
    case "doesNotBeginWith":
      return valueIsField ? `{"$where":"!this.${field}.startsWith(this.${value})"}` : `{"${field}":{"$not":{"$regex":"^${escapeDoubleQuotes2(value)}"}}}`;
    case "doesNotEndWith":
      return valueIsField ? `{"$where":"!this.${field}.endsWith(this.${value})"}` : `{"${field}":{"$not":{"$regex":"${escapeDoubleQuotes2(value)}$"}}}`;
    case "null":
      return `{"${field}":null}`;
    case "notNull":
      return `{"${field}":{"$ne":null}}`;
    case "in":
    case "notIn": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length > 0) {
        return valueIsField ? `{"$where":"${operator === "notIn" ? "!" : ""}[${valueAsArray.map((val) => `this.${val}`).join(",")}].includes(this.${field})"}` : `{"${field}":{"${mongoOperators[operator]}":[${valueAsArray.map(
          (val) => shouldRenderAsNumber(val, parseNumbers) ? `${trimIfString(val)}` : `"${escapeDoubleQuotes2(val)}"`
        ).join(",")}]}}`;
      } else {
        return "";
      }
    }
    case "between":
    case "notBetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && isValidValue(valueAsArray[0]) && isValidValue(valueAsArray[1])) {
        const [first, second] = valueAsArray;
        const firstNum = shouldRenderAsNumber(first, true) ? parseFloat(first) : NaN;
        const secondNum = shouldRenderAsNumber(second, true) ? parseFloat(second) : NaN;
        const firstValue = valueIsField || !isNaN(firstNum) ? `${first}` : `"${escapeDoubleQuotes2(first)}"`;
        const secondValue = valueIsField || !isNaN(secondNum) ? `${second}` : `"${escapeDoubleQuotes2(second)}"`;
        if (operator === "between") {
          return valueIsField ? `{"$and":[{"$expr":{"$gte":["$${field}","$${firstValue}"]}},{"$expr":{"$lte":["$${field}","$${secondValue}"]}}]}` : `{"${field}":{"$gte":${firstValue},"$lte":${secondValue}}}`;
        } else {
          return valueIsField ? `{"$or":[{"$expr":{"$lt":["$${field}","$${firstValue}"]}},{"$expr":{"$gt":["$${field}","$${secondValue}"]}}]}` : `{"$or":[{"${field}":{"$lt":${firstValue}}},{"${field}":{"$gt":${secondValue}}}]}`;
        }
      } else {
        return "";
      }
    }
  }
  return "";
};
var shouldNegate2 = (op) => /^(does)?not/i.test(op);
var wrapInNegation = (clause, negate) => negate ? `!(${clause})` : `${clause}`;
var escapeSingleQuotes = (v, escapeQuotes) => typeof v !== "string" || !escapeQuotes ? v : v.replaceAll(`'`, `\\'`);
var defaultRuleProcessorSpEL = ({ field, operator, value, valueSource }, { escapeQuotes, parseNumbers } = {}) => {
  const valueIsField = valueSource === "field";
  const operatorTL = operator.replace(/^=$/, "==");
  const useBareValue = typeof value === "number" || typeof value === "boolean" || typeof value === "bigint" || shouldRenderAsNumber(value, parseNumbers);
  switch (operatorTL) {
    case "<":
    case "<=":
    case "==":
    case "!=":
    case ">":
    case ">=":
      return `${field} ${operatorTL} ${valueIsField || useBareValue ? trimIfString(value) : `'${escapeSingleQuotes(value, escapeQuotes)}'`}`;
    case "contains":
    case "doesNotContain":
      return wrapInNegation(
        `${field} matches ${valueIsField || useBareValue ? trimIfString(value) : `'${escapeSingleQuotes(value, escapeQuotes)}'`}`,
        shouldNegate2(operatorTL)
      );
    case "beginsWith":
    case "doesNotBeginWith": {
      const valueTL = valueIsField ? `'^'.concat(${trimIfString(value)})` : `'${typeof value === "string" && !value.startsWith("^") || useBareValue ? "^" : ""}${escapeSingleQuotes(value, escapeQuotes)}'`;
      return wrapInNegation(`${field} matches ${valueTL}`, shouldNegate2(operatorTL));
    }
    case "endsWith":
    case "doesNotEndWith": {
      const valueTL = valueIsField ? `${trimIfString(value)}.concat('$')` : `'${escapeSingleQuotes(value, escapeQuotes)}${typeof value === "string" && !value.endsWith("$") || useBareValue ? "$" : ""}'`;
      return wrapInNegation(`${field} matches ${valueTL}`, shouldNegate2(operatorTL));
    }
    case "null":
      return `${field} == null`;
    case "notNull":
      return `${field} != null`;
    case "in":
    case "notIn": {
      const negate = shouldNegate2(operatorTL) ? "!" : "";
      const valueAsArray = toArray(value);
      if (valueAsArray.length > 0) {
        return `${negate}(${valueAsArray.map(
          (val) => `${field} == ${valueIsField || shouldRenderAsNumber(val, parseNumbers) ? `${trimIfString(val)}` : `'${escapeSingleQuotes(val, escapeQuotes)}'`}`
        ).join(" or ")})`;
      } else {
        return "";
      }
    }
    case "between":
    case "notBetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && !!valueAsArray[0] && !!valueAsArray[1]) {
        const [first, second] = valueAsArray;
        const firstNum = shouldRenderAsNumber(first, true) ? parseFloat(first) : NaN;
        const secondNum = shouldRenderAsNumber(second, true) ? parseFloat(second) : NaN;
        let firstValue = isNaN(firstNum) ? valueIsField ? `${first}` : `'${escapeSingleQuotes(first, escapeQuotes)}'` : firstNum;
        let secondValue = isNaN(secondNum) ? valueIsField ? `${second}` : `'${escapeSingleQuotes(second, escapeQuotes)}'` : secondNum;
        if (firstValue === firstNum && secondValue === secondNum && secondNum < firstNum) {
          const tempNum = secondNum;
          secondValue = firstNum;
          firstValue = tempNum;
        }
        if (operator === "between") {
          return `(${field} >= ${firstValue} and ${field} <= ${secondValue})`;
        } else {
          return `(${field} < ${firstValue} or ${field} > ${secondValue})`;
        }
      } else {
        return "";
      }
    }
  }
  return "";
};
var escapeSingleQuotes2 = (v, escapeQuotes) => escapeQuotes && typeof v === "string" ? v.replaceAll(`'`, `''`) : v;
var defaultValueProcessorByRule = ({ operator, value, valueSource }, { escapeQuotes, parseNumbers, quoteFieldNamesWith } = {}) => {
  const valueIsField = valueSource === "field";
  const [qfnwPre, qfnwPost] = quoteFieldNamesWithArray(quoteFieldNamesWith);
  const operatorLowerCase = operator.toLowerCase();
  const wrapFieldName = (f) => `${qfnwPre}${f}${qfnwPost}`;
  switch (operatorLowerCase) {
    case "null":
    case "notnull": {
      return "";
    }
    case "in":
    case "notin": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length > 0) {
        return `(${valueAsArray.map(
          (v) => valueIsField ? wrapFieldName(v) : shouldRenderAsNumber(v, parseNumbers) ? `${trimIfString(v)}` : `'${escapeSingleQuotes2(v, escapeQuotes)}'`
        ).join(", ")})`;
      }
      return "";
    }
    case "between":
    case "notbetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && isValidValue(valueAsArray[0]) && isValidValue(valueAsArray[1])) {
        const [first, second] = valueAsArray;
        return valueIsField ? `${wrapFieldName(first)} and ${wrapFieldName(second)}` : shouldRenderAsNumber(first, parseNumbers) && shouldRenderAsNumber(second, parseNumbers) ? `${trimIfString(first)} and ${trimIfString(second)}` : `'${escapeSingleQuotes2(first, escapeQuotes)}' and '${escapeSingleQuotes2(
          second,
          escapeQuotes
        )}'`;
      }
      return "";
    }
    case "contains":
    case "doesnotcontain":
      return valueIsField ? `'%' || ${wrapFieldName(value)} || '%'` : `'%${escapeSingleQuotes2(value, escapeQuotes)}%'`;
    case "beginswith":
    case "doesnotbeginwith":
      return valueIsField ? `${wrapFieldName(value)} || '%'` : `'${escapeSingleQuotes2(value, escapeQuotes)}%'`;
    case "endswith":
    case "doesnotendwith":
      return valueIsField ? `'%' || ${wrapFieldName(value)}` : `'%${escapeSingleQuotes2(value, escapeQuotes)}'`;
  }
  if (typeof value === "boolean") {
    return value ? "TRUE" : "FALSE";
  }
  return valueIsField ? wrapFieldName(value) : shouldRenderAsNumber(value, parseNumbers) ? `${trimIfString(value)}` : `'${escapeSingleQuotes2(value, escapeQuotes)}'`;
};
var convertOperator = (op) => op.replace(/^(=)$/, "$1=").replace(/^notNull$/i, "!=").replace(/^null$/i, "==");
var negateIfNotOp = (op, jsonRule) => /^(does)?not/i.test(op) ? { "!": jsonRule } : jsonRule;
var defaultRuleProcessorJsonLogic = ({ field, operator, value, valueSource }, { parseNumbers } = {}) => {
  const valueIsField = valueSource === "field";
  const fieldObject = { var: field };
  const fieldOrNumberRenderer = (v) => valueIsField ? { var: `${v}` } : shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v;
  switch (operator) {
    case "<":
    case "<=":
    case "=":
    case "!=":
    case ">":
    case ">=":
      return {
        [convertOperator(operator)]: [fieldObject, fieldOrNumberRenderer(value)]
      };
    case "null":
    case "notNull": {
      return {
        [`${operator === "notNull" ? "!" : "="}=`]: [fieldObject, null]
      };
    }
    case "in":
    case "notIn": {
      const valueAsArray = toArray(value).map(fieldOrNumberRenderer);
      if (valueAsArray.length > 0) {
        const jsonRule = { in: [fieldObject, valueAsArray] };
        return negateIfNotOp(operator, jsonRule);
      }
      return false;
    }
    case "between":
    case "notBetween": {
      const valueAsArray = toArray(value);
      if (valueAsArray.length >= 2 && isValidValue(valueAsArray[0]) && isValidValue(valueAsArray[1])) {
        let [first, second] = valueAsArray;
        if (!valueIsField && shouldRenderAsNumber(first, true) && shouldRenderAsNumber(second, true)) {
          const firstNum = parseFloat(first);
          const secondNum = parseFloat(second);
          if (secondNum < firstNum) {
            const tempNum = secondNum;
            second = firstNum;
            first = tempNum;
          } else {
            first = firstNum;
            second = secondNum;
          }
        } else if (valueIsField) {
          first = { var: first };
          second = { var: second };
        }
        const jsonRule = { "<=": [first, fieldObject, second] };
        return negateIfNotOp(operator, jsonRule);
      }
      return false;
    }
    case "contains":
    case "doesNotContain": {
      const jsonRule = {
        in: [fieldOrNumberRenderer(value), fieldObject]
      };
      return negateIfNotOp(operator, jsonRule);
    }
    case "beginsWith":
    case "doesNotBeginWith": {
      const jsonRule = {
        startsWith: [fieldObject, fieldOrNumberRenderer(value)]
      };
      return negateIfNotOp(operator, jsonRule);
    }
    case "endsWith":
    case "doesNotEndWith": {
      const jsonRule = {
        endsWith: [fieldObject, fieldOrNumberRenderer(value)]
      };
      return negateIfNotOp(operator, jsonRule);
    }
  }
  return false;
};
var defaultRuleProcessorSQL = (rule, {
  parseNumbers,
  escapeQuotes,
  quoteFieldNamesWith = ["", ""],
  valueProcessor = defaultValueProcessorByRule
} = {}) => {
  const value = valueProcessor(rule, { parseNumbers, escapeQuotes, quoteFieldNamesWith });
  const operator = mapSQLOperator(rule.operator);
  const operatorLowerCase = operator.toLowerCase();
  if ((operatorLowerCase === "in" || operatorLowerCase === "not in" || operatorLowerCase === "between" || operatorLowerCase === "not between") && !value) {
    return "";
  }
  const [qFNWpre, qFNWpost] = quoteFieldNamesWithArray(quoteFieldNamesWith);
  return `${qFNWpre}${rule.field}${qFNWpost} ${operator} ${value}`.trim();
};
var isValidationResult = (vr) => isPojo(vr) && typeof vr.valid === "boolean";
var isRuleOrGroupValid = (rg, validationResult, validator) => {
  if (typeof validationResult === "boolean") {
    return validationResult;
  }
  if (isValidationResult(validationResult)) {
    return validationResult.valid;
  }
  if (typeof validator === "function" && !("rules" in rg)) {
    const vr = validator(rg);
    if (typeof vr === "boolean") {
      return vr;
    }
    if (isValidationResult(vr)) {
      return vr.valid;
    }
  }
  return true;
};
var uniqByName = (originalArray) => {
  const names = /* @__PURE__ */ new Set();
  const newArray = [];
  originalArray.forEach((el) => {
    if (!names.has(el.name)) {
      names.add(el.name);
      newArray.push(el);
    }
  });
  return newArray;
};
var uniqOptGroups = (originalArray) => {
  const labels = /* @__PURE__ */ new Set();
  const names = /* @__PURE__ */ new Set();
  const newArray = [];
  originalArray.forEach((el) => {
    if (!labels.has(el.label)) {
      labels.add(el.label);
      const optionsForThisGroup = [];
      el.options.forEach((opt) => {
        if (!names.has(opt.name)) {
          names.add(opt.name);
          optionsForThisGroup.push(opt);
        }
      });
      newArray.push({ ...el, options: optionsForThisGroup });
    }
  });
  return newArray;
};
function formatQuery(ruleGroup, options = {}) {
  let format = "json";
  let valueProcessorInternal = defaultValueProcessorByRule;
  let ruleProcessorInternal = null;
  let quoteFieldNamesWith = ["", ""];
  let validator = () => true;
  let fields = [];
  let validationMap = {};
  let fallbackExpression = "";
  let paramPrefix = ":";
  let paramsKeepPrefix = false;
  let parseNumbers = false;
  let placeholderFieldName = defaultPlaceholderFieldName;
  let placeholderOperatorName = defaultPlaceholderOperatorName;
  if (typeof options === "string") {
    format = options.toLowerCase();
    if (format === "mongodb") {
      ruleProcessorInternal = defaultRuleProcessorMongoDB;
    } else if (format === "cel") {
      ruleProcessorInternal = defaultRuleProcessorCEL;
    } else if (format === "spel") {
      ruleProcessorInternal = defaultRuleProcessorSpEL;
    } else if (format === "jsonlogic") {
      ruleProcessorInternal = defaultRuleProcessorJsonLogic;
    }
  } else {
    format = (options.format ?? "json").toLowerCase();
    const { valueProcessor = null, ruleProcessor = null } = options;
    if (typeof ruleProcessor === "function") {
      ruleProcessorInternal = ruleProcessor;
    }
    valueProcessorInternal = typeof valueProcessor === "function" ? (r2, opts) => isValueProcessorLegacy(valueProcessor) ? valueProcessor(r2.field, r2.operator, r2.value, r2.valueSource) : valueProcessor(r2, opts) : format === "mongodb" ? ruleProcessorInternal ?? defaultRuleProcessorMongoDB : format === "cel" ? ruleProcessorInternal ?? defaultRuleProcessorCEL : format === "spel" ? ruleProcessorInternal ?? defaultRuleProcessorSpEL : format === "jsonlogic" ? ruleProcessorInternal ?? defaultRuleProcessorJsonLogic : defaultValueProcessorByRule;
    quoteFieldNamesWith = quoteFieldNamesWithArray(options.quoteFieldNamesWith);
    validator = options.validator ?? (() => true);
    fields = options.fields ?? [];
    fallbackExpression = options.fallbackExpression ?? "";
    paramPrefix = options.paramPrefix ?? ":";
    paramsKeepPrefix = !!options.paramsKeepPrefix;
    parseNumbers = !!options.parseNumbers;
    placeholderFieldName = options.placeholderFieldName ?? defaultPlaceholderFieldName;
    placeholderOperatorName = options.placeholderOperatorName ?? defaultPlaceholderOperatorName;
  }
  if (!fallbackExpression) {
    fallbackExpression = format === "mongodb" ? '"$and":[{"$expr":true}]' : format === "cel" || format === "spel" ? "1 == 1" : "(1 = 1)";
  }
  if (format === "json" || format === "json_without_ids") {
    const rg = parseNumbers ? numerifyValues(ruleGroup) : ruleGroup;
    if (format === "json") {
      return JSON.stringify(rg, null, 2);
    }
    return JSON.stringify(rg, [
      "rules",
      "field",
      "value",
      "operator",
      "combinator",
      "not",
      "valueSource"
    ]);
  }
  if (typeof validator === "function") {
    const validationResult = validator(ruleGroup);
    if (typeof validationResult === "boolean") {
      if (validationResult === false) {
        return format === "parameterized" ? { sql: fallbackExpression, params: [] } : format === "parameterized_named" ? { sql: fallbackExpression, params: {} } : format === "mongodb" ? `{${fallbackExpression}}` : format === "jsonlogic" ? false : fallbackExpression;
      }
    } else {
      validationMap = validationResult;
    }
  }
  const validatorMap = {};
  const uniqueFields = uniqByName(fields);
  uniqueFields.forEach((f) => {
    if (typeof f.validator === "function") {
      validatorMap[f.name] = f.validator;
    }
  });
  const validateRule = (rule) => {
    let validationResult = void 0;
    let fieldValidator = void 0;
    if (rule.id) {
      validationResult = validationMap[rule.id];
    }
    if (fields.length) {
      const fieldArr = fields.filter((f) => f.name === rule.field);
      if (fieldArr.length) {
        const field = fieldArr[0];
        if (typeof field.validator === "function") {
          fieldValidator = field.validator;
        }
      }
    }
    return [validationResult, fieldValidator];
  };
  if (format === "sql") {
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const processedRules = rg.rules.map((rule) => {
        if (typeof rule === "string") {
          return rule;
        }
        if (isRuleGroup(rule)) {
          return processRuleGroup(rule);
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return "";
        }
        const escapeQuotes = (rule.valueSource ?? "value") === "value";
        if (typeof ruleProcessorInternal === "function") {
          return ruleProcessorInternal(rule, { parseNumbers, escapeQuotes, quoteFieldNamesWith });
        }
        return defaultRuleProcessorSQL(rule, {
          parseNumbers,
          escapeQuotes,
          valueProcessor: valueProcessorInternal,
          quoteFieldNamesWith
        });
      });
      if (processedRules.length === 0) {
        return fallbackExpression;
      }
      return `${rg.not ? "NOT " : ""}(${processedRules.filter(Boolean).join(isRuleGroupType(rg) ? ` ${rg.combinator} ` : " ")})`;
    };
    return processRuleGroup(ruleGroup, true);
  }
  if (format === "parameterized" || format === "parameterized_named") {
    const parameterized = format === "parameterized";
    const params = [];
    const params_named = {};
    const fieldParamIndexes = {};
    const getNextNamedParam = (field) => {
      fieldParamIndexes[field] = (fieldParamIndexes[field] ?? 0) + 1;
      return `${field}_${fieldParamIndexes[field]}`;
    };
    const processRule = (rule) => {
      const [validationResult, fieldValidator] = validateRule(rule);
      if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
        return "";
      }
      const value = valueProcessorInternal(rule, { parseNumbers, quoteFieldNamesWith });
      const operator = mapSQLOperator(rule.operator);
      if ((rule.valueSource ?? "value") === "value") {
        if (operator.toLowerCase() === "is null" || operator.toLowerCase() === "is not null") {
          return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator}`;
        } else if (operator.toLowerCase() === "in" || operator.toLowerCase() === "not in") {
          if (value) {
            const splitValue = toArray(rule.value);
            if (parameterized) {
              splitValue.forEach(
                (v) => params.push(shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v)
              );
              return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} (${splitValue.map(() => "?").join(", ")})`;
            }
            const inParams = [];
            splitValue.forEach((v) => {
              const thisParamName = getNextNamedParam(rule.field);
              inParams.push(`${paramPrefix}${thisParamName}`);
              params_named[`${paramsKeepPrefix ? paramPrefix : ""}${thisParamName}`] = shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v;
            });
            return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} (${inParams.join(", ")})`;
          } else {
            return "";
          }
        } else if (operator.toLowerCase() === "between" || operator.toLowerCase() === "not between") {
          if (value) {
            const valueAsArray = toArray(rule.value);
            const [first, second] = valueAsArray.slice(0, 2).map((v) => shouldRenderAsNumber(v, parseNumbers) ? parseFloat(v) : v);
            if (parameterized) {
              params.push(first);
              params.push(second);
              return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} ? and ?`;
            }
            const firstParamName = getNextNamedParam(rule.field);
            const secondParamName = getNextNamedParam(rule.field);
            params_named[`${paramsKeepPrefix ? paramPrefix : ""}${firstParamName}`] = first;
            params_named[`${paramsKeepPrefix ? paramPrefix : ""}${secondParamName}`] = second;
            return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} ${paramPrefix}${firstParamName} and ${paramPrefix}${secondParamName}`;
          } else {
            return "";
          }
        }
        let paramValue = rule.value;
        if (typeof rule.value === "string") {
          if (shouldRenderAsNumber(rule.value, parseNumbers)) {
            paramValue = parseFloat(rule.value);
          } else {
            paramValue = /^'.*'$/g.test(value) ? value.replace(/(^'|'$)/g, "") : (
              /* istanbul ignore next */
              value
            );
          }
        }
        let paramName = "";
        if (parameterized) {
          params.push(paramValue);
        } else {
          paramName = getNextNamedParam(rule.field);
          params_named[`${paramsKeepPrefix ? paramPrefix : ""}${paramName}`] = paramValue;
        }
        return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} ${parameterized ? "?" : `${paramPrefix}${paramName}`}`.trim();
      } else {
        const operatorLowerCase = operator.toLowerCase();
        if ((operatorLowerCase === "in" || operatorLowerCase === "not in" || operatorLowerCase === "between" || operatorLowerCase === "not between") && !value) {
          return "";
        }
      }
      return `${quoteFieldNamesWith[0]}${rule.field}${quoteFieldNamesWith[1]} ${operator} ${value}`.trim();
    };
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const processedRules = rg.rules.map((rule) => {
        if (typeof rule === "string") {
          return rule;
        }
        if (isRuleGroup(rule)) {
          return processRuleGroup(rule);
        }
        return processRule(rule);
      });
      if (processedRules.length === 0) {
        return fallbackExpression;
      }
      return `${rg.not ? "NOT " : ""}(${processedRules.filter(Boolean).join(isRuleGroupType(rg) ? ` ${rg.combinator} ` : " ")})`;
    };
    if (parameterized) {
      return { sql: processRuleGroup(ruleGroup, true), params };
    }
    return { sql: processRuleGroup(ruleGroup, true), params: params_named };
  }
  if (format === "mongodb") {
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const combinator = `"$${rg.combinator.toLowerCase()}"`;
      let hasChildRules = false;
      const expressions = rg.rules.map((rule) => {
        if (isRuleGroup(rule)) {
          const processedRuleGroup = processRuleGroup(rule);
          if (processedRuleGroup) {
            hasChildRules = true;
            return /^\{.+\}$/.test(processedRuleGroup) ? processedRuleGroup : `{${processedRuleGroup}}`;
          }
          return "";
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return "";
        }
        return (ruleProcessorInternal ?? valueProcessorInternal)(rule, { parseNumbers });
      }).filter(Boolean);
      return expressions.length > 0 ? expressions.length === 1 && !hasChildRules ? expressions[0] : `${combinator}:[${expressions.join(",")}]` : fallbackExpression;
    };
    const rgStandard = isRuleGroupType(ruleGroup) ? ruleGroup : convertFromIC(ruleGroup);
    const processedQuery = processRuleGroup(rgStandard, true);
    return /^\{.+\}$/.test(processedQuery) ? processedQuery : `{${processedQuery}}`;
  }
  if (format === "cel") {
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const expression = rg.rules.map((rule) => {
        if (typeof rule === "string") {
          return celCombinatorMap[rule];
        }
        if (isRuleGroup(rule)) {
          return processRuleGroup(rule);
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return "";
        }
        return (ruleProcessorInternal ?? valueProcessorInternal)(rule, {
          parseNumbers,
          escapeQuotes: (rule.valueSource ?? "value") === "value"
        });
      }).filter(Boolean).join(
        isRuleGroupType(rg) ? ` ${celCombinatorMap[rg.combinator]} ` : " "
      );
      const [prefix, suffix] = rg.not || !outermost ? [`${rg.not ? "!" : ""}(`, ")"] : ["", ""];
      return expression ? `${prefix}${expression}${suffix}` : fallbackExpression;
    };
    return processRuleGroup(ruleGroup, true);
  }
  if (format === "spel") {
    const processRuleGroup = (rg, outermost) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return outermost ? fallbackExpression : "";
      }
      const expression = rg.rules.map((rule) => {
        if (typeof rule === "string") {
          return rule;
        }
        if (isRuleGroup(rule)) {
          return processRuleGroup(rule);
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return "";
        }
        return (ruleProcessorInternal ?? valueProcessorInternal)(rule, {
          parseNumbers,
          escapeQuotes: (rule.valueSource ?? "value") === "value"
        });
      }).filter(Boolean).join(isRuleGroupType(rg) ? ` ${rg.combinator} ` : " ");
      const [prefix, suffix] = rg.not || !outermost ? [`${rg.not ? "!" : ""}(`, ")"] : ["", ""];
      return expression ? `${prefix}${expression}${suffix}` : fallbackExpression;
    };
    return processRuleGroup(ruleGroup, true);
  }
  if (format === "jsonlogic") {
    const query = isRuleGroupType(ruleGroup) ? ruleGroup : convertFromIC(ruleGroup);
    const processRuleGroup = (rg) => {
      if (!isRuleOrGroupValid(rg, validationMap[rg.id ?? /* istanbul ignore next */
      ""])) {
        return false;
      }
      const processedRules = rg.rules.map((rule) => {
        if (isRuleGroup(rule)) {
          return processRuleGroup(rule);
        }
        const [validationResult, fieldValidator] = validateRule(rule);
        if (!isRuleOrGroupValid(rule, validationResult, fieldValidator) || rule.field === placeholderFieldName || rule.operator === placeholderOperatorName) {
          return false;
        }
        return (ruleProcessorInternal ?? valueProcessorInternal)(rule, { parseNumbers });
      }).filter(Boolean);
      if (processedRules.length === 0) {
        return false;
      }
      const jsonRuleGroup = processedRules.length === 1 ? processedRules[0] : {
        [rg.combinator]: processedRules
      };
      return rg.not ? { "!": jsonRuleGroup } : jsonRuleGroup;
    };
    return processRuleGroup(query);
  }
  return "";
}
var internalValueProcessors = {
  default: defaultValueProcessorByRule,
  mongodb: defaultRuleProcessorMongoDB,
  cel: defaultRuleProcessorCEL,
  spel: defaultRuleProcessorSpEL
};
var generateValueProcessor = (format) => (field, operator, value, valueSource) => internalValueProcessors[format](
  { field, operator, value, valueSource },
  { parseNumbers: false }
);
var defaultValueProcessor = generateValueProcessor("default");
var defaultMongoDBValueProcessor = generateValueProcessor("mongodb");
var defaultCELValueProcessor = generateValueProcessor("cel");
var defaultSpELValueProcessor = generateValueProcessor("spel");
var defaultValueProcessorCELByRule = defaultRuleProcessorCEL;
var defaultValueProcessorMongoDBByRule = defaultRuleProcessorMongoDB;
var defaultValueProcessorSpELByRule = defaultRuleProcessorSpEL;
var cryptoModule = globalThis.crypto;
var generateID = () => "00-0-4-2-000".replace(
  /[^-]/g,
  (s) => ((Math.random() + ~~s) * 65536 >> s).toString(16).padStart(4, "0")
);
if (cryptoModule) {
  if (typeof cryptoModule.randomUUID === "function") {
    generateID = () => cryptoModule.randomUUID();
  } else if (typeof cryptoModule.getRandomValues === "function") {
    const template = [
      "".padEnd(8, "x"),
      "".padEnd(4, "x"),
      // third section starts with the UUID version
      "4".padEnd(4, "x"),
      // First character of fourth section is limited to four specific characters
      "y".padEnd(4, "x"),
      "".padEnd(12, "x")
    ].join("-");
    const position19vals = ["8", "9", "a", "b"];
    const re = /[xy]/g;
    const container = new Uint32Array(32);
    generateID = () => {
      cryptoModule.getRandomValues(container);
      let i = -1;
      return template.replaceAll(re, (char) => {
        i++;
        return char === "y" ? position19vals[container[i] % 4] : (container[i] % 16).toString(16);
      });
    };
  }
}
var mergeClassnames = (...args) => {
  const joinClassnamesByName = (name) => clsx_default(args.filter(Boolean).map((c) => clsx_default(c[name])));
  return {
    queryBuilder: joinClassnamesByName("queryBuilder"),
    ruleGroup: joinClassnamesByName("ruleGroup"),
    header: joinClassnamesByName("header"),
    body: joinClassnamesByName("body"),
    combinators: joinClassnamesByName("combinators"),
    addRule: joinClassnamesByName("addRule"),
    addGroup: joinClassnamesByName("addGroup"),
    cloneRule: joinClassnamesByName("cloneRule"),
    cloneGroup: joinClassnamesByName("cloneGroup"),
    removeGroup: joinClassnamesByName("removeGroup"),
    rule: joinClassnamesByName("rule"),
    fields: joinClassnamesByName("fields"),
    operators: joinClassnamesByName("operators"),
    value: joinClassnamesByName("value"),
    removeRule: joinClassnamesByName("removeRule"),
    notToggle: joinClassnamesByName("notToggle"),
    dragHandle: joinClassnamesByName("dragHandle"),
    lockRule: joinClassnamesByName("lockRule"),
    lockGroup: joinClassnamesByName("lockGroup"),
    valueSource: joinClassnamesByName("valueSource")
  };
};
var getCompatContextProvider = ({
  key,
  controlClassnames: compatClassnames,
  controlElements: compatElements
}) => (props) => {
  const rqbContext = (0, import_react3.useContext)(QueryBuilderContext);
  const classnamesObject = (0, import_react3.useMemo)(
    () => compatClassnames ? {
      controlClassnames: mergeClassnames(
        rqbContext.controlClassnames,
        props.controlClassnames,
        compatClassnames
      )
    } : {},
    [props.controlClassnames, rqbContext.controlClassnames]
  );
  const newContextProps = (0, import_react3.useMemo)(
    () => ({
      ...rqbContext,
      ...classnamesObject,
      controlElements: {
        ...rqbContext.controlElements,
        ...compatElements,
        ...props.controlElements
      }
    }),
    [classnamesObject, props.controlElements, rqbContext]
  );
  return React5.createElement(QueryBuilderContext.Provider, { value: newContextProps, key }, props.children);
};
var getValidationClassNames = (validationResult) => {
  const valid = typeof validationResult === "boolean" ? validationResult : typeof validationResult === "object" && validationResult !== null ? validationResult.valid : null;
  return typeof valid === "boolean" ? valid ? standardClassnames.valid : standardClassnames.invalid : "";
};
var getValueSourcesUtil = (fieldData, operator, getValueSources) => {
  const fd = fieldData ?? /* istanbul ignore else */
  {};
  if (fd.valueSources) {
    if (typeof fd.valueSources === "function") {
      return fd.valueSources(operator);
    }
    return fd.valueSources;
  }
  if (getValueSources) {
    const vals = getValueSources(fd.name, operator);
    if (vals)
      return vals;
  }
  return ["value"];
};
var messages_exports = {};
__export(messages_exports, {
  errorBothQueryDefaultQuery: () => errorBothQueryDefaultQuery,
  errorControlledToUncontrolled: () => errorControlledToUncontrolled,
  errorDeprecatedRuleGroupProps: () => errorDeprecatedRuleGroupProps,
  errorDeprecatedRuleProps: () => errorDeprecatedRuleProps,
  errorEnabledDndWithoutReactDnD: () => errorEnabledDndWithoutReactDnD,
  errorUncontrolledToControlled: () => errorUncontrolledToControlled
});
var errorDeprecatedRuleGroupProps = "A custom RuleGroup component has rendered a standard RuleGroup component with deprecated props. The combinator, not, and rules props should not be used. Instead, the full group object should be passed as the ruleGroup prop.";
var errorDeprecatedRuleProps = "A custom RuleGroup component has rendered a standard Rule component with deprecated props. The field, operator, value, and valueSource props should not be used. Instead, the full rule object should be passed as the rule prop.";
var errorBothQueryDefaultQuery = "QueryBuilder was rendered with both query and defaultQuery props. QueryBuilder must be either controlled or uncontrolled (specify either the query prop, or the defaultQuery prop, but not both). Decide between using a controlled or uncontrolled query builder and remove one of these props. More info: https://reactjs.org/link/controlled-components";
var errorUncontrolledToControlled = "QueryBuilder is changing from an uncontrolled component to be controlled. This is likely caused by the query changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled query builder for the lifetime of the component. More info: https://reactjs.org/link/controlled-components";
var errorControlledToUncontrolled = "QueryBuilder is changing from a controlled component to be uncontrolled. This is likely caused by the query changing from defined to undefined, which should not happen. Decide between using a controlled or uncontrolled query builder for the lifetime of the component. More info: https://reactjs.org/link/controlled-components";
var errorEnabledDndWithoutReactDnD = "QueryBuilder was rendered with the enableDragAndDrop prop set to true, but either react-dnd or react-dnd-html5-backend (or both) was not installed. To enable drag-and-drop functionality, install both packages and wrap QueryBuilder in QueryBuilderDnD from @react-querybuilder/dnd.";
var usePrevious = (value) => {
  const ref = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var didWarnBothQueryDefaultQuery = false;
var didWarnUncontrolledToControlled = false;
var didWarnControlledToUncontrolled = false;
var useControlledOrUncontrolled = ({
  defaultQuery,
  queryProp,
  isFirstRender
}) => {
  const prevQueryPresent = usePrevious(!!queryProp);
  (0, import_react4.useEffect)(() => {
    if (true) {
      if (!!queryProp && !!defaultQuery && !didWarnBothQueryDefaultQuery) {
        console.error(errorBothQueryDefaultQuery);
        didWarnBothQueryDefaultQuery = true;
      } else if (prevQueryPresent && !queryProp && !!defaultQuery && !didWarnControlledToUncontrolled) {
        console.error(errorControlledToUncontrolled);
        didWarnControlledToUncontrolled = true;
      } else if (!(prevQueryPresent || isFirstRender) && !!queryProp && !defaultQuery && !didWarnUncontrolledToControlled) {
        console.error(errorUncontrolledToControlled);
        didWarnUncontrolledToControlled = true;
      }
    }
  }, [defaultQuery, prevQueryPresent, queryProp, isFirstRender]);
};
var didWarnUsingDeprecatedRuleProps = false;
var didWarnUsingDeprecatedRuleGroupProps = false;
var useDeprecatedProps = (type, newPropPresent) => {
  (0, import_react6.useEffect)(() => {
    if (type === "rule" && !newPropPresent && !didWarnUsingDeprecatedRuleProps) {
      console.error(errorDeprecatedRuleProps);
      didWarnUsingDeprecatedRuleProps = true;
    }
    if (type === "ruleGroup" && !newPropPresent && !didWarnUsingDeprecatedRuleGroupProps) {
      console.error(errorDeprecatedRuleGroupProps);
      didWarnUsingDeprecatedRuleGroupProps = true;
    }
  }, [newPropPresent, type]);
};
var objectKeys = Object.keys;
var objectEntries = Object.entries;
var preferPropDefaultTrue = (prop, context) => prop === false ? false : prop ? true : context === false ? false : true;
var preferPropDefaultFalse = (prop, context) => prop ? true : prop === false ? false : context ? true : false;
var preferProp = (def, prop, context) => def ? preferPropDefaultTrue(prop, context) : preferPropDefaultFalse(prop, context);
var usePreferProp = (def, prop, context) => (0, import_react8.useMemo)(() => preferProp(def, prop, context), [context, def, prop]);
var useMergedContext = (props) => {
  const rqbContext = (0, import_react7.useContext)(QueryBuilderContext);
  const enableMountQueryChange = usePreferProp(
    true,
    props.enableMountQueryChange,
    rqbContext.enableMountQueryChange
  );
  const enableDragAndDrop = usePreferProp(false, props.enableDragAndDrop, rqbContext.enableDragAndDrop) && rqbContext.enableDragAndDrop !== false;
  const debugMode = usePreferProp(false, props.debugMode, rqbContext.debugMode);
  const controlClassnames = (0, import_react7.useMemo)(
    () => mergeClassnames(
      defaultControlClassnames,
      rqbContext.controlClassnames,
      props.controlClassnames
    ),
    [rqbContext.controlClassnames, props.controlClassnames]
  );
  const controlElements = (0, import_react7.useMemo)(
    () => ({
      ...defaultControlElements,
      ...rqbContext.controlElements,
      ...props.controlElements
    }),
    [props.controlElements, rqbContext.controlElements]
  );
  const translations = (0, import_react7.useMemo)(() => {
    const translationsTemp = {};
    objectKeys(props.translations).forEach((t) => {
      const contextTranslations = rqbContext.translations;
      translationsTemp[t] = {
        ...defaultTranslations[t],
        ...contextTranslations,
        ...props.translations[t]
      };
    });
    return { ...defaultTranslations, ...translationsTemp };
  }, [rqbContext.translations, props.translations]);
  const {
    controlClassnames: _controlClassnames,
    controlElements: _controlElements,
    debugMode: _debugMode,
    enableDragAndDrop: _enableDragAndDrop,
    enableMountQueryChange: _enableMountQueryChange,
    translations: _translations,
    ...otherContext
  } = rqbContext;
  return {
    controlClassnames,
    controlElements,
    debugMode,
    enableDragAndDrop,
    enableMountQueryChange,
    translations,
    ...otherContext
  };
};
var didWarnEnabledDndWithoutReactDnD = false;
var useReactDndWarning = (enableDragAndDrop, dndRefs) => {
  (0, import_react9.useEffect)(() => {
    if (!didWarnEnabledDndWithoutReactDnD && enableDragAndDrop && !dndRefs) {
      console.error(errorEnabledDndWithoutReactDnD);
      didWarnEnabledDndWithoutReactDnD = true;
    }
  }, []);
};
var getFieldsArray = (fields) => {
  let fieldsFlat = [];
  const fieldsArray = !fields ? [] : Array.isArray(fields) ? fields : Object.keys(fields).map((fld) => ({ ...fields[fld], name: fld })).sort((a, b) => a.label.localeCompare(b.label));
  if (isOptionGroupArray(fieldsArray)) {
    fieldsFlat = uniqByName(fieldsFlat.concat(...fieldsArray.map((opt) => opt.options)));
  } else {
    fieldsFlat = uniqByName(fieldsArray);
  }
  return fieldsFlat;
};
function fieldIsValidUtil({
  fieldsFlat,
  fieldName,
  operator,
  subordinateFieldName,
  getValueSources
}) {
  if (fieldsFlat.length === 0)
    return true;
  let valid = false;
  const primaryField = fieldsFlat.find((ff) => ff.name === fieldName);
  if (primaryField) {
    if (!subordinateFieldName && operator !== "notNull" && operator !== "null" && !getValueSourcesUtil(primaryField, operator, getValueSources).some((vs) => vs === "value")) {
      valid = false;
    } else {
      valid = true;
    }
    if (valid && !!subordinateFieldName) {
      if (getValueSourcesUtil(primaryField, operator, getValueSources).some((vs) => vs === "field") && fieldName !== subordinateFieldName) {
        const validSubordinateFields = filterFieldsByComparator(
          primaryField,
          fieldsFlat,
          operator
        );
        if (!validSubordinateFields.find((vsf) => vsf.name === subordinateFieldName)) {
          valid = false;
        }
      } else {
        valid = false;
      }
    }
  }
  return valid;
}
var celParser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 27], $V1 = [1, 31], $V2 = [1, 32], $V3 = [1, 28], $V4 = [1, 29], $V5 = [1, 30], $V6 = [1, 33], $V7 = [1, 34], $V8 = [1, 18], $V9 = [1, 26], $Va = [1, 12], $Vb = [1, 13], $Vc = [1, 19], $Vd = [1, 20], $Ve = [1, 40], $Vf = [1, 39], $Vg = [1, 41], $Vh = [1, 42], $Vi = [1, 43], $Vj = [1, 36], $Vk = [1, 37], $Vl = [1, 38], $Vm = [5, 37, 43, 45, 49, 50, 53, 54, 55, 56, 60, 61, 62, 63], $Vn = [1, 44], $Vo = [1, 45], $Vp = [1, 46], $Vq = [5, 23, 24, 25, 26, 27, 28, 31, 37, 40, 43, 44, 45, 46, 49, 50, 53, 54, 55, 56, 60, 61, 62, 63], $Vr = [7, 9, 10, 12, 13, 14, 16, 18, 21, 35, 40, 41, 44, 46], $Vs = [2, 36], $Vt = [1, 85], $Vu = [43, 45, 50], $Vv = [5, 37, 43, 45, 49, 50, 53, 61, 62, 63], $Vw = [5, 37, 43, 45, 49, 50, 53, 54, 55, 56, 61, 62, 63], $Vx = [2, 37], $Vy = [49, 50];
  var parser = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "main": 3, "expr": 4, "EOF": 5, "string_literal": 6, "STRING_LIT": 7, "bytes_literal": 8, "b": 9, "B": 10, "number_literal": 11, "INT_LIT": 12, "UINT_LIT": 13, "FLOAT_LIT": 14, "boolean_literal": 15, "BOOL_LIT": 16, "null_literal": 17, "NULL_LIT": 18, "literal": 19, "ident": 20, "IDENT": 21, "relop": 22, "==": 23, ">=": 24, ">": 25, "<=": 26, "<": 27, "!=": 28, "relation": 29, "member": 30, "in": 31, "list": 32, "map": 33, "negation": 34, "!": 35, "negative": 36, "-": 37, "unary": 38, "primary": 39, "DOT": 40, "(": 41, "expr_list": 42, ")": 43, "[": 44, "]": 45, "{": 46, "field_inits": 47, "trailing_comma": 48, "}": 49, ",": 50, "map_inits": 51, "math_operation": 52, "+": 53, "*": 54, "/": 55, "%": 56, "conditional_expr": 57, "conditional_and": 58, "conditional_or": 59, "?": 60, ":": 61, "&&": 62, "||": 63, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 5: "EOF", 7: "STRING_LIT", 9: "b", 10: "B", 12: "INT_LIT", 13: "UINT_LIT", 14: "FLOAT_LIT", 16: "BOOL_LIT", 18: "NULL_LIT", 21: "IDENT", 23: "==", 24: ">=", 25: ">", 26: "<=", 27: "<", 28: "!=", 31: "in", 35: "!", 37: "-", 40: "DOT", 41: "(", 43: ")", 44: "[", 45: "]", 46: "{", 49: "}", 50: ",", 53: "+", 54: "*", 55: "/", 56: "%", 60: "?", 61: ":", 62: "&&", 63: "||" },
    productions_: [0, [3, 2], [6, 1], [8, 2], [8, 2], [11, 1], [11, 1], [11, 1], [15, 1], [17, 1], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1], [20, 1], [22, 1], [22, 1], [22, 1], [22, 1], [22, 1], [22, 1], [29, 3], [29, 3], [29, 3], [34, 1], [34, 2], [36, 1], [36, 2], [38, 2], [30, 1], [30, 1], [30, 3], [30, 6], [30, 4], [30, 5], [48, 0], [48, 1], [39, 1], [39, 2], [39, 5], [39, 6], [39, 3], [39, 1], [39, 1], [39, 1], [32, 4], [33, 4], [52, 3], [52, 3], [52, 3], [52, 3], [52, 3], [4, 1], [4, 1], [4, 1], [4, 1], [4, 1], [4, 1], [57, 5], [58, 3], [59, 3], [42, 1], [42, 3], [47, 3], [47, 5], [51, 3], [51, 5]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
          return { nodeType: "Main", value: $$[$0 - 1] };
          break;
        case 2:
          this.$ = { type: "StringLiteral", value: $$[$0] };
          break;
        case 3:
        case 4:
          this.$ = { type: "BytesLiteral", value: $$[$0] };
          break;
        case 5:
          this.$ = { type: "IntegerLiteral", value: parseInt($$[$0], /x/.test($$[$0]) ? 16 : 10) };
          break;
        case 6:
          this.$ = { type: "UnsignedIntegerLiteral", value: parseInt($$[$0].replace(/u$/i, ""), /^0x/.test($$[$0]) ? 16 : 10) };
          break;
        case 7:
          this.$ = { type: "FloatLiteral", value: parseFloat($$[$0]) };
          break;
        case 8:
          this.$ = { type: "BooleanLiteral", value: $$[$0] === "true" };
          break;
        case 9:
          this.$ = { type: "NullLiteral", value: null };
          break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 38:
        case 43:
        case 44:
        case 45:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
          this.$ = $$[$0];
          break;
        case 15:
          this.$ = { type: "Identifier", value: $$[$0] };
          break;
        case 22:
        case 23:
        case 24:
          this.$ = { type: "Relation", left: $$[$0 - 2], operator: $$[$0 - 1], right: $$[$0] };
          break;
        case 25:
        case 27:
          this.$ = 1;
          break;
        case 26:
        case 28:
          this.$ = this.$ += 1;
          ;
          break;
        case 29:
          this.$ = { type: "Negation", negations: $$[$0 - 1], value: $$[$0] };
          break;
        case 30:
        case 31:
          this.$ = $$[$0];
          break;
        case 32:
          this.$ = { type: "Member", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 33:
          this.$ = { type: "Member", left: $$[$0 - 5], right: $$[$0 - 3], list: $$[$0 - 1] };
          break;
        case 34:
          this.$ = { type: "DynamicPropertyAccessor", left: $$[$0 - 3], right: $$[$0 - 1] };
          break;
        case 35:
          this.$ = { type: "FieldsObject", left: $$[$0 - 4], list: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 36:
          this.$ = false;
          break;
        case 37:
          this.$ = true;
          break;
        case 39:
          this.$ = { type: "Property", value: $$[$0] };
          break;
        case 40:
          this.$ = { type: "FunctionCall", name: $$[$0 - 4], args: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 41:
          this.$ = { type: "Property", value: $$[$0 - 4], args: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 42:
          this.$ = { type: "ExpressionGroup", value: $$[$0 - 1] };
          break;
        case 46:
          this.$ = { type: "List", value: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 47:
          this.$ = { type: "Map", value: $$[$0 - 2], trailingComma: $$[$0 - 1] };
          break;
        case 48:
          this.$ = { type: "Addition", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 49:
          this.$ = { type: "Subtraction", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 50:
          this.$ = { type: "Multiplication", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 51:
          this.$ = { type: "Division", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 52:
          this.$ = { type: "Modulo", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 59:
          this.$ = { type: "ConditionalExpr", condition: $$[$0 - 4], valueIfTrue: $$[$0 - 2], valueIfFalse: $$[$0] };
          break;
        case 60:
          this.$ = { type: "ConditionalAnd", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 61:
          this.$ = { type: "ConditionalOr", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 62:
          this.$ = { type: "ExpressionList", value: [$$[$0]] };
          break;
        case 63:
          this.$ = $$[$0 - 2];
          this.$.value.push($$[$0]);
          ;
          break;
        case 64:
          this.$ = { type: "FieldInits", value: [{ type: "FieldInit", left: $$[$0 - 2], right: $$[$0] }] };
          break;
        case 65:
          this.$ = $$[$0 - 4];
          this.$.value.push({ type: "FieldInit", left: $$[$0 - 2], right: $$[$0] });
          ;
          break;
        case 66:
          this.$ = { type: "MapInits", value: [{ type: "MapInit", left: $$[$0 - 2], right: $$[$0] }] };
          break;
        case 67:
          this.$ = $$[$0 - 4];
          this.$.value.push({ type: "MapInit", left: $$[$0 - 2], right: $$[$0] });
          ;
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 1: [3] }, { 5: [1, 35], 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }, o($Vm, [2, 53], { 22: 47, 23: [1, 49], 24: [1, 50], 25: [1, 51], 26: [1, 52], 27: [1, 53], 28: [1, 54], 31: [1, 48], 40: $Vn, 44: $Vo, 46: $Vp }), o($Vm, [2, 54]), o($Vm, [2, 55]), o($Vm, [2, 56]), o($Vm, [2, 57]), o($Vm, [2, 58]), o($Vq, [2, 30]), o($Vq, [2, 31]), o($Vq, [2, 38], { 41: [1, 55] }), { 20: 56, 21: $V8 }, { 4: 57, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 43]), o($Vq, [2, 44]), o($Vq, [2, 45]), { 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 32: 14, 33: 15, 35: [1, 59], 39: 58, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd }, o([5, 23, 24, 25, 26, 27, 28, 31, 37, 40, 41, 43, 44, 45, 46, 49, 50, 53, 54, 55, 56, 60, 61, 62, 63], [2, 15]), { 4: 61, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 42: 60, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 63, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 51: 62, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 10]), o($Vq, [2, 11]), o($Vq, [2, 12]), o($Vq, [2, 13]), o($Vq, [2, 14]), o($Vr, [2, 25]), o($Vq, [2, 2]), o($Vq, [2, 5]), o($Vq, [2, 6]), o($Vq, [2, 7]), { 6: 64, 7: $V0 }, { 6: 65, 7: $V0 }, o($Vq, [2, 8]), o($Vq, [2, 9]), { 1: [2, 1] }, { 4: 66, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 67, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 68, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 69, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 70, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 71, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 72, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 73, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 20: 74, 21: $V8 }, { 4: 75, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 20: 77, 21: $V8, 47: 76 }, { 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 30: 78, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd }, { 32: 79, 33: 80, 44: $Vc, 46: $Vd }, o($Vr, [2, 16]), o($Vr, [2, 17]), o($Vr, [2, 18]), o($Vr, [2, 19]), o($Vr, [2, 20]), o($Vr, [2, 21]), { 4: 61, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 42: 81, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 39], { 41: [1, 82] }), { 37: $Ve, 43: [1, 83], 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }, o($Vq, [2, 29]), o($Vr, [2, 26]), { 45: $Vs, 48: 84, 50: $Vt }, o($Vu, [2, 62], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), { 48: 86, 49: $Vs, 50: [1, 87] }, { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 61: [1, 88], 62: $Vk, 63: $Vl }, o($Vq, [2, 3]), o($Vq, [2, 4]), { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 61: [1, 89], 62: $Vk, 63: $Vl }, o([5, 43, 45, 49, 50, 61, 62, 63], [2, 60], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj }), o([5, 43, 45, 49, 50, 61, 63], [2, 61], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk }), o($Vv, [2, 48], { 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj }), o($Vv, [2, 49], { 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj }), o($Vw, [2, 50], { 60: $Vj }), o($Vw, [2, 51], { 60: $Vj }), o($Vw, [2, 52], { 60: $Vj }), o($Vq, [2, 32], { 41: [1, 90] }), { 37: $Ve, 45: [1, 91], 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }, { 48: 92, 49: $Vs, 50: [1, 93] }, { 61: [1, 94] }, o($Vm, [2, 22], { 40: $Vn, 44: $Vo, 46: $Vp }), o($Vm, [2, 23]), o($Vm, [2, 24]), { 43: $Vs, 48: 95, 50: $Vt }, { 4: 61, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 42: 96, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 42]), { 45: [1, 97] }, o([43, 45], $Vx, { 30: 3, 57: 4, 58: 5, 59: 6, 29: 7, 52: 8, 39: 9, 38: 10, 20: 11, 32: 14, 33: 15, 19: 16, 34: 17, 6: 21, 11: 22, 8: 23, 15: 24, 17: 25, 4: 98, 7: $V0, 9: $V1, 10: $V2, 12: $V3, 13: $V4, 14: $V5, 16: $V6, 18: $V7, 21: $V8, 35: $V9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd }), { 49: [1, 99] }, { 4: 100, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 49: $Vx, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 101, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 102, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 61, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 42: 103, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 34]), { 49: [1, 104] }, { 20: 105, 21: $V8, 49: $Vx }, { 4: 106, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 43: [1, 107] }, { 43: $Vs, 48: 108, 50: $Vt }, o($Vq, [2, 46]), o($Vu, [2, 63], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), o($Vq, [2, 47]), { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 61: [1, 109], 62: $Vk, 63: $Vl }, o($Vy, [2, 66], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), o($Vm, [2, 59]), { 43: [1, 110], 50: [1, 111] }, o($Vq, [2, 35]), { 61: [1, 112] }, o($Vy, [2, 64], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), o($Vq, [2, 40]), { 43: [1, 113] }, { 4: 114, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 33]), { 4: 98, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, { 4: 115, 6: 21, 7: $V0, 8: 23, 9: $V1, 10: $V2, 11: 22, 12: $V3, 13: $V4, 14: $V5, 15: 24, 16: $V6, 17: 25, 18: $V7, 19: 16, 20: 11, 21: $V8, 29: 7, 30: 3, 32: 14, 33: 15, 34: 17, 35: $V9, 38: 10, 39: 9, 40: $Va, 41: $Vb, 44: $Vc, 46: $Vd, 52: 8, 57: 4, 58: 5, 59: 6 }, o($Vq, [2, 41]), o($Vy, [2, 67], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl }), o($Vy, [2, 65], { 37: $Ve, 53: $Vf, 54: $Vg, 55: $Vh, 56: $Vi, 60: $Vj, 62: $Vk, 63: $Vl })],
    defaultActions: { 35: [2, 1] },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      var lex = function() {
        var token;
        token = lexer2.lex() || EOF;
        if (typeof token !== "number") {
          token = self.symbols_[token] || token;
        }
        return token;
      };
      var symbol, preErrorSymbol, state, action, a, r2, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r2 = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r2 !== "undefined") {
              return r2;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  };
  var lexer = /* @__PURE__ */ function() {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      // resets the lexer, sets new input
      setInput: function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      },
      // unshifts one char (or a string) into the input
      unput: function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r2 = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r2[0], r2[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        this._more = true;
        return this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      },
      // retain first n characters of the match
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      // return next match that has a token
      lex: function lex() {
        var r2 = this.next();
        if (r2) {
          return r2;
        } else {
          return this.lex();
        }
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      },
      // alias for begin(condition)
      pushState: function pushState(condition) {
        this.begin(condition);
      },
      // return the number of states currently on the stack
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length;
      },
      options: { "flex": true },
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 31;
            break;
          case 3:
            return "as";
            break;
          case 4:
            return "break";
            break;
          case 5:
            return "const";
            break;
          case 6:
            return "continue";
            break;
          case 7:
            return "else";
            break;
          case 8:
            return "for";
            break;
          case 9:
            return "function";
            break;
          case 10:
            return "if";
            break;
          case 11:
            return "import";
            break;
          case 12:
            return "let";
            break;
          case 13:
            return "loop";
            break;
          case 14:
            return "package";
            break;
          case 15:
            return "namespace";
            break;
          case 16:
            return "return";
            break;
          case 17:
            return "var";
            break;
          case 18:
            return "void";
            break;
          case 19:
            return "while";
            break;
          case 20:
            return 18;
            break;
          case 21:
            return 16;
            break;
          case 22:
            return 16;
            break;
          case 23:
            return 40;
            break;
          case 24:
            return 60;
            break;
          case 25:
            return 61;
            break;
          case 26:
            return 50;
            break;
          case 27:
            return 44;
            break;
          case 28:
            return 45;
            break;
          case 29:
            return 41;
            break;
          case 30:
            return 43;
            break;
          case 31:
            return 28;
            break;
          case 32:
            return 35;
            break;
          case 33:
            return 53;
            break;
          case 34:
            return 37;
            break;
          case 35:
            return 54;
            break;
          case 36:
            return 55;
            break;
          case 37:
            return 56;
            break;
          case 38:
            return 23;
            break;
          case 39:
            return 24;
            break;
          case 40:
            return 25;
            break;
          case 41:
            return 26;
            break;
          case 42:
            return 27;
            break;
          case 43:
            return 46;
            break;
          case 44:
            return 49;
            break;
          case 45:
            return 62;
            break;
          case 46:
            return 63;
            break;
          case 47:
            return 21;
            break;
          case 48:
            return 7;
            break;
          case 49:
            return 7;
            break;
          case 50:
            return 7;
            break;
          case 51:
            return 7;
            break;
          case 52:
            return 12;
            break;
          case 53:
            return 13;
            break;
          case 54:
            return 14;
            break;
          case 55:
            return 5;
            break;
          case 56:
            return "INVALID";
            break;
          case 57:
            console.log(yy_.yytext);
            break;
        }
      },
      rules: [/^(?:[/][/]\s.*\n)/, /^(?:\s+)/, /^(?:in)/, /^(?:as)/, /^(?:break)/, /^(?:const)/, /^(?:continue)/, /^(?:else)/, /^(?:for)/, /^(?:function)/, /^(?:if)/, /^(?:import)/, /^(?:let)/, /^(?:loop)/, /^(?:package)/, /^(?:namespace)/, /^(?:return)/, /^(?:var)/, /^(?:void)/, /^(?:while)/, /^(?:null)/, /^(?:true)/, /^(?:false)/, /^(?:\.)/, /^(?:\?)/, /^(?::)/, /^(?:,)/, /^(?:\[)/, /^(?:\])/, /^(?:\()/, /^(?:\))/, /^(?:!=)/, /^(?:!)/, /^(?:\+)/, /^(?:-)/, /^(?:\*)/, /^(?:\/)/, /^(?:%)/, /^(?:==)/, /^(?:>=)/, /^(?:>)/, /^(?:<=)/, /^(?:<)/, /^(?:\{)/, /^(?:\})/, /^(?:&&)/, /^(?:\|\|)/, /^(?:[_a-zA-Z][_a-zA-Z0-9]*)/, /^(?:[rR]?['][']['](\.|[^'])*['][']['])/, /^(?:[rR]?["]["]["](\.|[^"])*["]["]["])/, /^(?:[rR]?['](\.|[^'\n\r])*['])/, /^(?:[rR]?["](\.|[^"\n\r])*["])/, /^(?:[-]?([0-9]+|0x[0-9a-fA-F]+))/, /^(?:([0-9]+|0x[0-9a-fA-F]+)[uU])/, /^(?:[-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+(\.[0-9]+)?)?)/, /^(?:$)/, /^(?:.)/, /^(?:.)/],
      conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], "inclusive": true } }
    };
    return lexer2;
  }();
  parser.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser;
  parser.Parser = Parser;
  return new Parser();
}();
var isCELExpressionGroup = (expr) => expr.type === "ExpressionGroup";
var isCELConditionalAnd = (expr) => expr.type === "ConditionalAnd";
var isCELConditionalOr = (expr) => expr.type === "ConditionalOr";
var isCELStringLiteral = (expr) => expr.type === "StringLiteral";
var isCELLiteral = (expr) => isCELNumericLiteral(expr) || isCELStringLiteral(expr) || expr.type === "BooleanLiteral" || expr.type === "NullLiteral" || expr.type === "BytesLiteral";
var isCELNumericLiteral = (expr) => expr.type === "FloatLiteral" || expr.type === "IntegerLiteral" || expr.type === "UnsignedIntegerLiteral";
var isCELRelation = (expr) => expr.type === "Relation";
var isCELList = (expr) => expr.type === "List";
var isCELMap = (expr) => expr.type === "Map";
var isCELIdentifier = (expr) => expr.type === "Identifier";
var isCELNegation = (expr) => expr.type === "Negation";
var isCELMember = (expr) => expr.type === "Member";
var isCELIdentifierOrChain = (expr) => isCELIdentifier(expr) || isCELMember(expr) && !!expr.left && !!expr.right && !expr.list && !expr.value && isCELIdentifierOrChain(expr.left) && isCELIdentifier(expr.right);
var isCELLikeExpression = (expr) => isCELMember(expr) && !!expr.left && !!expr.right && !!expr.list && isCELIdentifierOrChain(expr.left) && isCELIdentifier(expr.right) && (expr.right.value === "contains" || expr.right.value === "startsWith" || expr.right.value === "endsWith") && expr.list.value.length === 1 && (isCELStringLiteral(expr.list.value[0]) || isCELIdentifier(expr.list.value[0]));
var getIdentifierFromChain = (expr) => {
  if (isCELIdentifier(expr)) {
    return expr.value;
  }
  return `${getIdentifierFromChain(expr.left)}.${expr.right.value}`;
};
function evalCELLiteralValue(literal) {
  if (literal.type === "StringLiteral") {
    return literal.value.replace(/^((?:'''|"""|'|")?)([\s\S]*?)\1$/gm, "$2");
  } else if (literal.type === "BooleanLiteral") {
    return literal.value;
  } else if (literal.type === "NullLiteral" || literal.type === "BytesLiteral") {
    return null;
  }
  return literal.value;
}
var normalizeCombinator = (c) => c === "||" ? "or" : "and";
var normalizeOperator = (op, flip) => {
  if (flip) {
    if (op === "<")
      return ">";
    if (op === "<=")
      return ">=";
    if (op === ">")
      return "<";
    if (op === ">=")
      return "<=";
  }
  if (op === "==")
    return "=";
  return op;
};
var generateFlatAndOrList = (expr) => {
  const combinator = normalizeCombinator(expr.type === "ConditionalAnd" ? "&&" : "||");
  const { left, right } = expr;
  if (isCELConditionalAnd(left) || isCELConditionalOr(left)) {
    return [...generateFlatAndOrList(left), combinator, right];
  }
  return [left, combinator, right];
};
var generateMixedAndOrList = (expr) => {
  const arr = generateFlatAndOrList(expr);
  const returnArray = [];
  let startIndex = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1] === "and") {
      startIndex = i;
      let j = 1;
      while (arr[startIndex + j] === "and") {
        i += 2;
        j += 2;
      }
      const tempAndArray = arr.slice(startIndex, i + 1);
      returnArray.push(tempAndArray);
      i -= 2;
    } else if (arr[i + 1] === "or") {
      if (i === 0 || i === arr.length - 3) {
        if (i === 0 || arr[i - 1] === "or") {
          returnArray.push(arr[i]);
        }
        returnArray.push(arr[i + 1]);
        if (i === arr.length - 3) {
          returnArray.push(arr[i + 2]);
        }
      } else {
        if (arr[i - 1] === "and") {
          returnArray.push(arr[i + 1]);
        } else {
          returnArray.push(arr[i]);
          returnArray.push(arr[i + 1]);
        }
      }
    }
  }
  if (returnArray.length === 1 && Array.isArray(returnArray[0])) {
    return returnArray[0];
  }
  return returnArray;
};
function parseCEL(cel, options = {}) {
  const { fields, independentCombinators, listsAsArrays } = options;
  const ic = !!independentCombinators;
  const fieldsFlat = getFieldsArray(fields);
  const fieldIsValid = (fieldName, operator, subordinateFieldName) => fieldIsValidUtil({
    fieldName,
    fieldsFlat,
    operator,
    subordinateFieldName,
    getValueSources: options == null ? void 0 : options.getValueSources
  });
  const emptyQuery = {
    rules: [],
    ...ic ? {} : { combinator: "and" }
  };
  const processCELExpression = (expr, processOpts = {}) => {
    const { forwardNegation: forwardedNegation, groupOnlyIfNecessary } = processOpts;
    if (isCELNegation(expr)) {
      const negate = expr.negations % 2 === 1;
      const negatedExpr = isCELExpressionGroup(expr.value) && isCELLikeExpression(expr.value.value) ? processCELExpression(expr.value.value, { forwardNegation: negate }) : processCELExpression(expr.value, {
        groupOnlyIfNecessary: true,
        forwardNegation: negate
      });
      if (negatedExpr) {
        if (!negate || negate && !("rules" in negatedExpr) && negatedExpr.operator.startsWith("doesNot")) {
          return ic ? { rules: [negatedExpr] } : {
            combinator: "and",
            rules: [negatedExpr]
          };
        }
        return ic ? { rules: [negatedExpr], not: true } : {
          combinator: "and",
          rules: [negatedExpr],
          not: true
        };
      }
    } else if (isCELExpressionGroup(expr)) {
      const rule = processCELExpression(expr.value, {
        groupOnlyIfNecessary: true
      });
      if (rule) {
        if ("rules" in rule || groupOnlyIfNecessary && isCELExpressionGroup(expr.value)) {
          return rule;
        }
        return ic ? { rules: [rule] } : { combinator: "and", rules: [rule] };
      }
    } else if (isCELConditionalAnd(expr) || isCELConditionalOr(expr)) {
      if (ic) {
        const andOrList2 = generateFlatAndOrList(expr);
        const rules2 = andOrList2.map((v) => {
          if (typeof v === "string") {
            return v;
          }
          return processCELExpression(v);
        });
        if (!rules2.every(Boolean)) {
          return null;
        }
        return {
          rules: rules2
        };
      }
      const andOrList = generateMixedAndOrList(expr);
      const combinator = andOrList[1];
      const filteredList = andOrList.filter((v) => Array.isArray(v) || !!v && typeof v !== "string" && "type" in v).map(
        (v) => Array.isArray(v) ? v.filter((vf) => !!v && typeof vf !== "string" && "type" in vf) : v
      );
      const rules = filteredList.map((exp) => {
        if (Array.isArray(exp)) {
          return {
            combinator: "and",
            rules: exp.map((e) => processCELExpression(e)).filter((r2) => !!r2)
          };
        }
        return processCELExpression(exp);
      }).filter((r2) => !!r2);
      if (rules.length > 0) {
        return { combinator, rules };
      }
    } else if (isCELLikeExpression(expr)) {
      const field = getIdentifierFromChain(expr.left);
      const func = expr.right.value;
      const operatorPre = func === "startsWith" ? "beginsWith" : func;
      const operator = forwardedNegation ? `doesNot${operatorPre[0].toUpperCase()}${operatorPre.slice(1).replace("s", "")}` : operatorPre;
      const valueObj = expr.list.value[0];
      const value = isCELStringLiteral(valueObj) ? evalCELLiteralValue(valueObj) : valueObj.value;
      const valueSource = expr.list.value[0].type === "Identifier" ? "field" : void 0;
      if (fieldIsValid(field, operator, valueSource === "field" ? value : void 0)) {
        return valueSource ? { field, operator, value, valueSource } : { field, operator, value };
      }
    } else if (isCELRelation(expr)) {
      let field = null;
      let value = void 0;
      let valueSource = void 0;
      let flip = false;
      const { left, right } = expr;
      if (isCELIdentifierOrChain(left)) {
        field = getIdentifierFromChain(left);
        if (isCELIdentifierOrChain(right)) {
          value = getIdentifierFromChain(right);
          valueSource = "field";
        } else if (isCELLiteral(right)) {
          value = evalCELLiteralValue(right);
        }
      } else {
        if (isCELIdentifierOrChain(right) && isCELLiteral(left) && expr.operator !== "in") {
          flip = true;
          field = getIdentifierFromChain(right);
          value = evalCELLiteralValue(left);
        }
      }
      let operator = normalizeOperator(expr.operator, flip);
      if (value === null && (operator === "=" || operator === "!=")) {
        operator = operator === "=" ? "null" : "notNull";
      } else if (operator === "in" && isCELList(right)) {
        if (right.value.value.every(isCELLiteral)) {
          value = right.value.value.map(evalCELLiteralValue);
        } else {
          if (right.value.value.every(isCELIdentifierOrChain)) {
            valueSource = "field";
            value = right.value.value.map((id) => getIdentifierFromChain(id));
          }
        }
        if (value && !listsAsArrays) {
          value = value.map((v) => `${v}`).join(",");
        }
      } else if (operator === "in" && isCELMap(right)) {
        const keys = right.value.value.map((v) => v.left);
        if (keys.every((k) => isCELLiteral(k) || isCELIdentifierOrChain(k))) {
          value = keys.map(
            (k) => isCELLiteral(k) ? evalCELLiteralValue(k) : getIdentifierFromChain(k)
          );
        }
        if (value && !listsAsArrays) {
          value = value.map((v) => `${v}`).join(",");
        }
      }
      if (field && fieldIsValid(field, operator, valueSource === "field" ? value : void 0) && typeof value !== "undefined") {
        return valueSource ? { field, operator, value, valueSource } : { field, operator, value };
      }
    }
    return null;
  };
  let processedCEL;
  try {
    processedCEL = celParser.parse(cel).value;
  } catch (err) {
    return emptyQuery;
  }
  const result = processCELExpression(processedCEL);
  if (result) {
    if ("rules" in result) {
      return result;
    }
    return { rules: [result], ...ic ? {} : { combinator: "and" } };
  }
  return emptyQuery;
}
var isJsonLogicVar = (logic) => isPojo(logic) && "var" in logic;
var isRQBJsonLogicVar = (logic) => isJsonLogicVar(logic) && typeof logic.var === "string";
var isJsonLogicEqual = (logic) => isPojo(logic) && "==" in logic;
var isJsonLogicStrictEqual = (logic) => isPojo(logic) && "===" in logic;
var isJsonLogicNotEqual = (logic) => isPojo(logic) && "!=" in logic;
var isJsonLogicStrictNotEqual = (logic) => isPojo(logic) && "!==" in logic;
var isJsonLogicNegation = (logic) => isPojo(logic) && "!" in logic;
var isJsonLogicDoubleNegation = (logic) => isPojo(logic) && "!!" in logic;
var isJsonLogicOr = (logic) => isPojo(logic) && "or" in logic;
var isJsonLogicAnd = (logic) => isPojo(logic) && "and" in logic;
var isJsonLogicGreaterThan = (logic) => isPojo(logic) && ">" in logic;
var isJsonLogicGreaterThanOrEqual = (logic) => isPojo(logic) && ">=" in logic;
var isJsonLogicLessThan = (logic) => isPojo(logic) && "<" in logic && logic["<"].length === 2;
var isJsonLogicLessThanOrEqual = (logic) => isPojo(logic) && "<=" in logic && logic["<="].length === 2;
var isJsonLogicInArray = (logic) => isPojo(logic) && "in" in logic && Array.isArray(logic.in[1]);
var isJsonLogicInString = (logic) => isPojo(logic) && "in" in logic && !Array.isArray(logic.in[1]);
var isJsonLogicBetweenExclusive = (logic) => isPojo(logic) && "<" in logic && Array.isArray(logic["<"]) && logic["<"].length === 3;
var isJsonLogicBetweenInclusive = (logic) => isPojo(logic) && "<=" in logic && Array.isArray(logic["<="]) && logic["<="].length === 3;
var isRQBJsonLogicStartsWith = (logic) => isPojo(logic) && "startsWith" in logic;
var isRQBJsonLogicEndsWith = (logic) => isPojo(logic) && "endsWith" in logic;
var emptyRuleGroup = { combinator: "and", rules: [] };
function parseJsonLogic(rqbJsonLogic, options = {}) {
  const fieldsFlat = getFieldsArray(options.fields);
  const { getValueSources, listsAsArrays, jsonLogicOperations } = options;
  const fieldIsValid = (fieldName, operator, subordinateFieldName) => fieldIsValidUtil({
    fieldName,
    fieldsFlat,
    operator,
    subordinateFieldName,
    getValueSources
  });
  function processLogic(logic, outermost) {
    if (outermost && !isPojo(logic)) {
      return false;
    }
    const key = Object.keys(logic)[0];
    const keyValue = logic[key];
    if (isJsonLogicAnd(logic)) {
      return {
        combinator: "and",
        rules: logic.and.map((l) => processLogic(l)).filter(Boolean)
      };
    } else if (isJsonLogicOr(logic)) {
      return {
        combinator: "or",
        rules: logic.or.map((l) => processLogic(l)).filter(Boolean)
      };
    } else if (isJsonLogicNegation(logic)) {
      const rule2 = processLogic(logic["!"]);
      if (rule2) {
        if (!isRuleGroupType(rule2) && (rule2.operator === "between" || rule2.operator === "in" || rule2.operator === "contains" || rule2.operator === "beginsWith" || rule2.operator === "endsWith")) {
          const newRule = { ...rule2, operator: defaultOperatorNegationMap[rule2.operator] };
          if (outermost) {
            return { combinator: "and", rules: [newRule] };
          }
          return newRule;
        } else if (isJsonLogicBetweenExclusive(logic["!"]) && isRuleGroupType(rule2)) {
          return { ...rule2, not: true };
        }
        return { combinator: "and", rules: [rule2], not: true };
      }
      return false;
    } else if (isJsonLogicDoubleNegation(logic)) {
      const rule2 = processLogic(logic["!!"]);
      return rule2 || false;
    }
    let rule = false;
    let field = "";
    let operator = "=";
    let value = "";
    let valueSource = void 0;
    if (jsonLogicOperations && objectKeys(jsonLogicOperations).includes(key)) {
      rule = jsonLogicOperations[key](keyValue);
    } else if (
      // Basic boolean operations
      isJsonLogicEqual(logic) || isJsonLogicStrictEqual(logic) || isJsonLogicNotEqual(logic) || isJsonLogicStrictNotEqual(logic) || isJsonLogicGreaterThan(logic) || isJsonLogicGreaterThanOrEqual(logic) || isJsonLogicLessThan(logic) || isJsonLogicLessThanOrEqual(logic) || isJsonLogicInString(logic) || isRQBJsonLogicStartsWith(logic) || isRQBJsonLogicEndsWith(logic)
    ) {
      const [first, second] = keyValue;
      if (isRQBJsonLogicVar(first) && !isPojo(second)) {
        field = first.var;
        value = second;
      } else if (!isPojo(first) && isRQBJsonLogicVar(second)) {
        field = second.var;
        value = first;
      } else if (isRQBJsonLogicVar(first) && isRQBJsonLogicVar(second)) {
        field = first.var;
        value = second.var;
        valueSource = "field";
      } else {
        return false;
      }
      if (isJsonLogicEqual(logic) || isJsonLogicStrictEqual(logic)) {
        operator = value === null ? "null" : "=";
      } else if (isJsonLogicNotEqual(logic) || isJsonLogicStrictNotEqual(logic)) {
        operator = value === null ? "notNull" : "!=";
      } else if (isJsonLogicInString(logic)) {
        operator = "contains";
      } else if (isRQBJsonLogicStartsWith(logic)) {
        operator = "beginsWith";
      } else if (isRQBJsonLogicEndsWith(logic)) {
        operator = "endsWith";
      } else {
        operator = key;
      }
      if (fieldIsValid(field, operator, valueSource === "field" ? value : void 0)) {
        rule = { field, operator, value, valueSource };
      }
    } else if (isJsonLogicBetweenExclusive(logic) && isRQBJsonLogicVar(logic["<"][1])) {
      field = logic["<"][1].var;
      const values = [logic["<"][0], logic["<"][2]];
      if (values.every(isRQBJsonLogicVar) || values.every((el) => typeof el === "string") || values.every((el) => typeof el === "number") || values.every((el) => typeof el === "boolean")) {
        return processLogic({
          and: [{ ">": [{ var: field }, values[0]] }, { "<": [{ var: field }, values[1]] }]
        }) || /* istanbul ignore next */
        false;
      }
    } else if (isJsonLogicBetweenInclusive(logic) && isRQBJsonLogicVar(logic["<="][1])) {
      field = logic["<="][1].var;
      operator = "between";
      const values = [logic["<="][0], logic["<="][2]];
      if (logic["<="].every(isRQBJsonLogicVar)) {
        const vars = values;
        valueSource = "field";
        const fieldList = vars.map((el) => el.var).filter((sf) => fieldIsValid(field, operator, sf));
        value = listsAsArrays ? fieldList : fieldList.join(",");
      } else {
        if (values.every((el) => typeof el === "string") || values.every((el) => typeof el === "number") || values.every((el) => typeof el === "boolean")) {
          value = listsAsArrays ? values : values.map((el) => `${el}`).join(",");
        }
      }
      if (fieldIsValid(field, operator) && value.length >= 2) {
        rule = { field, operator, value, valueSource };
      }
    } else if (isJsonLogicInArray(logic) && isRQBJsonLogicVar(keyValue[0])) {
      field = keyValue[0].var;
      operator = "in";
      if (logic.in[1].every(isRQBJsonLogicVar)) {
        valueSource = "field";
        const fieldList = logic.in[1].map((el) => el.var).filter((sf) => fieldIsValid(field, operator, sf));
        value = listsAsArrays ? fieldList : fieldList.join(",");
      } else {
        if (logic.in[1].every((el) => typeof el === "string") || logic.in[1].every((el) => typeof el === "number") || logic.in[1].every((el) => typeof el === "boolean")) {
          value = listsAsArrays ? logic.in[1] : logic.in[1].map((el) => `${el}`).join(",");
        }
      }
      if (value.length > 0) {
        rule = { field, operator, value, valueSource };
      }
    }
    return !rule ? false : outermost ? { combinator: "and", rules: [rule] } : rule;
  }
  let logicRoot = rqbJsonLogic;
  if (typeof rqbJsonLogic === "string") {
    try {
      logicRoot = JSON.parse(rqbJsonLogic);
    } catch (err) {
      return emptyRuleGroup;
    }
  }
  const result = processLogic(logicRoot, true);
  const finalQuery = !result ? emptyRuleGroup : result;
  return options.independentCombinators ? convertToIC(finalQuery) : finalQuery;
}
var getRegExStr = (re) => typeof re === "string" ? re : re.source;
var isPrimitive = (v) => typeof v === "string" || typeof v === "number" || typeof v === "boolean";
var mongoDbToRqbOperatorMap = {
  $eq: "=",
  $ne: "!=",
  $gt: ">",
  $gte: ">=",
  $lt: "<",
  $lte: "<="
};
var emptyRuleGroup2 = { combinator: "and", rules: [] };
function parseMongoDB(mongoDbRules, options = {}) {
  const listsAsArrays = !!options.listsAsArrays;
  const fieldsFlat = getFieldsArray(options.fields);
  const getValueSources = options.getValueSources;
  const fieldIsValid = (fieldName, operator, subordinateFieldName) => fieldIsValidUtil({
    fieldName,
    fieldsFlat,
    operator,
    subordinateFieldName,
    getValueSources
  });
  function processMongoDbQueryBooleanOperator(field, mdbOperator, keyValue) {
    let operator = "=";
    let value = "";
    if (mdbOperator === "$eq" || mdbOperator === "$ne" || mdbOperator === "$gt" || mdbOperator === "$gte" || mdbOperator === "$lt" || mdbOperator === "$lte") {
      if (mdbOperator === "$ne" && keyValue === null) {
        if (fieldIsValid(field, "notNull")) {
          return { field, operator: "notNull", value: null };
        }
      } else {
        operator = mongoDbToRqbOperatorMap[mdbOperator];
        if (fieldIsValid(field, operator)) {
          return { field, operator, value: keyValue };
        }
      }
    } else if (mdbOperator === "$regex" && /^[^^].*[^$]$/.test(getRegExStr(keyValue))) {
      if (fieldIsValid(field, "contains")) {
        return {
          field,
          operator: "contains",
          value: getRegExStr(keyValue)
        };
      }
    } else if (mdbOperator === "$regex" && /^\^.*[^$]/.test(getRegExStr(keyValue))) {
      if (fieldIsValid(field, "beginsWith")) {
        return {
          field,
          operator: "beginsWith",
          value: getRegExStr(keyValue).replace(/^\^/, "")
        };
      }
    } else if (mdbOperator === "$regex" && /[^^].*\$/.test(getRegExStr(keyValue))) {
      if (fieldIsValid(field, "endsWith")) {
        return {
          field,
          operator: "endsWith",
          value: getRegExStr(keyValue).replace(/\$$/, "")
        };
      }
    } else if (mdbOperator === "$in" && Array.isArray(keyValue)) {
      if (fieldIsValid(field, "in")) {
        if (listsAsArrays) {
          value = keyValue;
        } else {
          value = keyValue.map((v) => `${v}`).join(",");
        }
        return { field, operator: "in", value };
      }
    } else if (mdbOperator === "$nin" && Array.isArray(keyValue)) {
      if (fieldIsValid(field, "notIn")) {
        if (listsAsArrays) {
          value = keyValue;
        } else {
          value = keyValue.map((v) => `${v}`).join(",");
        }
        return { field, operator: "notIn", value };
      }
    }
    return false;
  }
  function processMongoDbQueryObjectKey(key, keyValue) {
    let field = "";
    if (key === "$and") {
      if (!Array.isArray(keyValue) || keyValue.length === 0 || !keyValue.every(isPojo)) {
        return false;
      }
      if (keyValue.length === 2 && keyValue.every((kv) => objectKeys(kv).length === 1)) {
        const [rule1, rule2] = keyValue;
        const [ruleKey1, ruleKey2] = keyValue.map((kv) => objectKeys(kv)[0]);
        if (ruleKey1 === ruleKey2 && isPojo(rule1[ruleKey1]) && objectKeys(rule1[ruleKey1]).length === 1 && isPojo(rule2[ruleKey2]) && objectKeys(rule2[ruleKey2]).length === 1 && ("$gte" in rule1[ruleKey1] && "$lte" in rule2[ruleKey2] && rule2[ruleKey2].$lte >= rule1[ruleKey1].$gte || "$lte" in rule1[ruleKey1] && "$gte" in rule2[ruleKey2] && rule1[ruleKey1].$lte >= rule2[ruleKey2].$gte)) {
          const [val1, val2] = [
            rule1[ruleKey1].$gte ?? rule1[ruleKey1].$lte,
            rule2[ruleKey2].$lte ?? rule2[ruleKey2].$gte
          ];
          let value = listsAsArrays ? [val1, val2] : `${val1},${val2}`;
          if (val1 > val2) {
            value = listsAsArrays ? [val2, val1] : `${val2},${val1}`;
          }
          return { field: ruleKey1, operator: "between", value };
        }
      }
      const rules = keyValue.map((l) => processMongoDbQueryObject(l)).filter(Boolean);
      return rules.length > 0 ? { combinator: "and", rules } : false;
    } else if (key === "$or") {
      if (!Array.isArray(keyValue) || keyValue.length === 0 || !keyValue.every(isPojo)) {
        return false;
      }
      if (keyValue.length === 2 && keyValue.every((kv) => objectKeys(kv).length === 1)) {
        const [rule1, rule2] = keyValue;
        const [ruleKey1, ruleKey2] = keyValue.map((kv) => objectKeys(kv)[0]);
        if (ruleKey1 === ruleKey2 && isPojo(rule1[ruleKey1]) && objectKeys(rule1[ruleKey1]).length === 1 && isPojo(rule2[ruleKey2]) && objectKeys(rule2[ruleKey2]).length === 1 && ("$gt" in rule1[ruleKey1] && "$lt" in rule2[ruleKey2] && rule1[ruleKey1].$gt >= rule2[ruleKey2].$lt || "$lt" in rule1[ruleKey1] && "$gt" in rule2[ruleKey2] && rule2[ruleKey2].$gt >= rule1[ruleKey1].$lt)) {
          const [val1, val2] = [
            rule1[ruleKey1].$gt ?? rule1[ruleKey1].$lt,
            rule2[ruleKey2].$lt ?? rule2[ruleKey2].$gt
          ];
          let value = listsAsArrays ? [val1, val2] : `${val1},${val2}`;
          if (val1 > val2) {
            value = listsAsArrays ? [val2, val1] : `${val2},${val1}`;
          }
          return { field: ruleKey1, operator: "notBetween", value };
        }
      }
      const rules = keyValue.map((l) => processMongoDbQueryObject(l)).filter(Boolean);
      return rules.length > 0 ? { combinator: "or", rules } : false;
    } else if (key === "$not" && isPojo(keyValue)) {
      const ruleOrGroup = processMongoDbQueryObject(keyValue);
      if (ruleOrGroup) {
        if (isRuleGroupType(ruleOrGroup)) {
          return ruleOrGroup.not ? { combinator: "and", rules: [ruleOrGroup], not: true } : { ...ruleOrGroup, not: true };
        }
        return { ...ruleOrGroup, operator: defaultOperatorNegationMap[ruleOrGroup.operator] };
      }
      return false;
    } else if (key === "$expr") {
      const op = objectKeys(keyValue)[0];
      if (/^\$(eq|gte?|lte?|n?in)$/.test(op)) {
        if (Array.isArray(keyValue[op]) && keyValue[op].length === 2 && typeof keyValue[op][0] === "string" && /^\$/.test(keyValue[op][0])) {
          field = keyValue[op][0].replace(/^\$/, "");
          const val = keyValue[op][1];
          if (typeof val === "string" && /^\$/.test(val) || Array.isArray(val) && val.every((v) => typeof v === "string") && val.every((v) => /^\$/.test(v))) {
            const valForProcessing = Array.isArray(val) ? val.map((v) => v.replace(/^\$/, "")) : val.replace(/^\$/, "");
            const tempRule = processMongoDbQueryBooleanOperator(field, op, valForProcessing);
            if (tempRule) {
              if (typeof tempRule.value === "string" && !fieldIsValid(field, tempRule.operator, tempRule.value)) {
                return false;
              }
              return { ...tempRule, valueSource: "field" };
            }
          }
          return processMongoDbQueryBooleanOperator(field, op, keyValue[op][1]);
        }
      }
    } else if (/^[^$]/.test(key)) {
      field = key;
      if (isPrimitive(keyValue)) {
        if (fieldIsValid(field, "=")) {
          return { field, operator: "=", value: keyValue };
        }
      } else if (keyValue === null) {
        if (fieldIsValid(field, "null")) {
          return { field, operator: "null", value: keyValue };
        }
      } else if (isPojo(keyValue)) {
        let betweenRule = false;
        let notRule = false;
        const operators = objectKeys(keyValue).filter((o) => /^\$(eq|ne|gte?|lte?|n?in|regex|not)$/.test(o)).sort();
        if (operators.length === 0) {
          return false;
        }
        if ("$not" in keyValue && isPojo(keyValue.$not)) {
          const invertedNotRule = processMongoDbQueryObject({ [field]: keyValue.$not });
          if (invertedNotRule) {
            if (isRuleGroupType(invertedNotRule)) {
              notRule = { ...invertedNotRule, not: true };
            } else {
              notRule = {
                ...invertedNotRule,
                operator: defaultOperatorNegationMap[invertedNotRule.operator]
              };
            }
          }
        }
        if ("$gte" in keyValue && "$lte" in keyValue) {
          betweenRule = {
            field,
            operator: "between",
            value: listsAsArrays ? [keyValue.$gte, keyValue.$lte] : `${keyValue.$gte},${keyValue.$lte}`
          };
        }
        const rules = operators.filter((op) => !(notRule && op === "$not")).filter((op) => !(betweenRule && (op === "$gte" || op === "$lte"))).map((op) => processMongoDbQueryBooleanOperator(field, op, keyValue[op])).filter(Boolean);
        if (notRule) {
          rules.unshift(notRule);
        }
        if (betweenRule) {
          rules.unshift(betweenRule);
        }
        if (rules.length === 0) {
          return false;
        }
        if (rules.length === 1) {
          return rules[0];
        }
        return { combinator: "and", rules };
      }
    }
    return false;
  }
  function processMongoDbQueryObject(mongoDbQueryObject) {
    const rules = objectKeys(mongoDbQueryObject).map((k) => processMongoDbQueryObjectKey(k, mongoDbQueryObject[k])).filter(Boolean);
    return rules.length === 1 ? rules[0] : rules.length > 1 ? { combinator: "and", rules } : false;
  }
  let mongoDbPOJO = mongoDbRules;
  if (typeof mongoDbRules === "string") {
    try {
      mongoDbPOJO = JSON.parse(mongoDbRules);
    } catch (err) {
      return emptyRuleGroup2;
    }
  }
  if (!isPojo(mongoDbPOJO)) {
    return emptyRuleGroup2;
  }
  const result = processMongoDbQueryObject(mongoDbPOJO);
  const finalQuery = result ? isRuleGroupType(result) ? result : { combinator: "and", rules: [result] } : emptyRuleGroup2;
  return options.independentCombinators ? convertToIC(finalQuery) : finalQuery;
}
var sqlParser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 8], $V1 = [1, 4], $V2 = [2, 4], $V3 = [1, 11], $V4 = [1, 10], $V5 = [2, 16], $V6 = [1, 14], $V7 = [1, 15], $V8 = [1, 16], $V9 = [6, 8], $Va = [2, 148], $Vb = [1, 19], $Vc = [1, 20], $Vd = [16, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Ve = [16, 18, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vf = [2, 162], $Vg = [1, 29], $Vh = [6, 8, 14, 17, 146, 150, 152, 154], $Vi = [1, 42], $Vj = [1, 61], $Vk = [1, 53], $Vl = [1, 60], $Vm = [1, 62], $Vn = [1, 63], $Vo = [1, 64], $Vp = [1, 65], $Vq = [1, 66], $Vr = [1, 59], $Vs = [1, 54], $Vt = [1, 55], $Vu = [1, 56], $Vv = [1, 57], $Vw = [1, 58], $Vx = [1, 43], $Vy = [1, 44], $Vz = [1, 45], $VA = [1, 47], $VB = [1, 34], $VC = [1, 67], $VD = [16, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $VE = [6, 8, 14, 17, 150, 152, 154], $VF = [2, 145], $VG = [1, 76], $VH = [1, 77], $VI = [6, 8, 14, 17, 43, 133, 138, 144, 146, 150, 152, 154], $VJ = [1, 80], $VK = [1, 79], $VL = [1, 81], $VM = [6, 8, 14, 17, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 109, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $VN = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 109, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $VO = [1, 102], $VP = [1, 100], $VQ = [1, 101], $VR = [1, 96], $VS = [1, 97], $VT = [1, 98], $VU = [1, 99], $VV = [1, 103], $VW = [1, 104], $VX = [1, 105], $VY = [1, 106], $VZ = [1, 107], $V_ = [1, 108], $V$ = [2, 107], $V01 = [6, 8, 14, 17, 34, 36, 43, 45, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $V11 = [6, 8, 14, 17, 34, 36, 43, 45, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $V21 = [2, 82], $V31 = [1, 110], $V41 = [1, 109], $V51 = [1, 117], $V61 = [2, 65], $V71 = [1, 119], $V81 = [16, 35, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $V91 = [16, 29, 35, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 121, 195], $Va1 = [1, 162], $Vb1 = [1, 164], $Vc1 = [17, 43], $Vd1 = [6, 8, 14, 16, 17, 34, 35, 36, 43, 45, 50, 51, 52, 53, 56, 57, 59, 60, 62, 71, 72, 74, 76, 77, 79, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194, 195], $Ve1 = [2, 60], $Vf1 = [1, 174], $Vg1 = [1, 172], $Vh1 = [6, 8, 138, 146], $Vi1 = [16, 35, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vj1 = [6, 8, 14, 17, 138, 144, 146, 150, 152, 154], $Vk1 = [6, 8, 14, 17, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $Vl1 = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 94, 95, 96, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $Vm1 = [6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 93, 94, 95, 96, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $Vn1 = [16, 35, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vo1 = [16, 35, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vp1 = [6, 8, 14, 17, 43, 157], $Vq1 = [16, 35, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vr1 = [71, 74, 77], $Vs1 = [16, 35, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $Vt1 = [1, 239], $Vu1 = [6, 8, 14, 17], $Vv1 = [1, 257], $Vw1 = [1, 253], $Vx1 = [2, 199], $Vy1 = [1, 261], $Vz1 = [1, 262], $VA1 = [6, 8, 14, 17, 43, 129, 135, 138, 144, 146, 150, 152, 154, 182], $VB1 = [1, 264], $VC1 = [1, 267], $VD1 = [1, 268], $VE1 = [1, 269], $VF1 = [1, 270], $VG1 = [2, 176], $VH1 = [1, 266], $VI1 = [6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182], $VJ1 = [6, 8, 14, 17, 135, 138, 144, 146, 150, 152, 154], $VK1 = [1, 282], $VL1 = [2, 181], $VM1 = [170, 173], $VN1 = [6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194], $VO1 = [2, 201], $VP1 = [1, 287], $VQ1 = [1, 299], $VR1 = [1, 307], $VS1 = [1, 308], $VT1 = [1, 309], $VU1 = [6, 8, 14, 17, 138, 146, 150, 152, 154], $VV1 = [1, 319], $VW1 = [1, 325], $VX1 = [1, 326], $VY1 = [2, 206], $VZ1 = [1, 337], $V_1 = [16, 152], $V$1 = [6, 8, 14, 17, 152, 154], $V02 = [1, 353];
  var parser = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "main": 3, "selectClause": 4, "semicolonOpt": 5, "EOF": 6, "unionClause": 7, ";": 8, "unionClauseNotParenthesized": 9, "unionClauseParenthesized": 10, "order_by_opt": 11, "limit_opt": 12, "selectClauseParenthesized": 13, "UNION": 14, "distinctOpt": 15, "(": 16, ")": 17, "SELECT": 18, "highPriorityOpt": 19, "maxStateMentTimeOpt": 20, "straightJoinOpt": 21, "sqlSmallResultOpt": 22, "sqlBigResultOpt": 23, "sqlBufferResultOpt": 24, "sqlCacheOpt": 25, "sqlCalcFoundRowsOpt": 26, "selectExprList": 27, "selectDataSetOpt": 28, "ALL": 29, "DISTINCT": 30, "DISTINCTROW": 31, "HIGH_PRIORITY": 32, "MAX_STATEMENT_TIME": 33, "=": 34, "NUMERIC": 35, "STRAIGHT_JOIN": 36, "SQL_SMALL_RESULT": 37, "SQL_BIG_RESULT": 38, "SQL_BUFFER_RESULT": 39, "SQL_CACHE": 40, "SQL_NO_CACHE": 41, "SQL_CALC_FOUND_ROWS": 42, ",": 43, "selectExpr": 44, "*": 45, "selectExprStar": 46, "expr": 47, "selectExprAliasOpt": 48, "identifier": 49, "DOT": 50, "AS": 51, "IDENTIFIER": 52, "STRING": 53, "string": 54, "number": 55, "EXPONENT_NUMERIC": 56, "HEX_NUMERIC": 57, "boolean": 58, "TRUE": 59, "FALSE": 60, "null": 61, "NULL": 62, "literal": 63, "place_holder": 64, "function_call": 65, "function_call_param_list": 66, "function_call_param": 67, "identifier_list": 68, "case_expr_opt": 69, "when_then_list": 70, "WHEN": 71, "THEN": 72, "case_when_else": 73, "ELSE": 74, "case_when": 75, "CASE": 76, "END": 77, "simple_expr_prefix": 78, "+": 79, "simple_expr": 80, "-": 81, "~": 82, "!": 83, "BINARY": 84, "expr_list": 85, "ROW": 86, "EXISTS": 87, "{": 88, "}": 89, "||": 90, "WILDCARD": 91, "bit_expr": 92, "|": 93, "&": 94, "<<": 95, ">>": 96, "/": 97, "DIV": 98, "MOD": 99, "%": 100, "^": 101, "not_opt": 102, "NOT": 103, "escape_opt": 104, "ESCAPE": 105, "predicate": 106, "IN": 107, "BETWEEN": 108, "AND": 109, "SOUNDS": 110, "LIKE": 111, "REGEXP": 112, "comparison_operator": 113, ">=": 114, ">": 115, "<=": 116, "<": 117, "<>": 118, "!=": 119, "sub_query_data_set_opt": 120, "ANY": 121, "boolean_primary": 122, "IS": 123, "boolean_extra": 124, "UNKNOWN": 125, "OR": 126, "XOR": 127, "where_opt": 128, "WHERE": 129, "group_by_opt": 130, "group_by": 131, "roll_up_opt": 132, "WITH": 133, "ROLLUP": 134, "GROUP_BY": 135, "group_by_order_by_item_list": 136, "order_by": 137, "ORDER_BY": 138, "group_by_order_by_item": 139, "sort_opt": 140, "ASC": 141, "DESC": 142, "having_opt": 143, "HAVING": 144, "limit": 145, "LIMIT": 146, "OFFSET": 147, "procedure_opt": 148, "procedure": 149, "PROCEDURE": 150, "for_update_lock_in_share_mode_opt": 151, "FOR": 152, "UPDATE": 153, "LOCK": 154, "SHARE": 155, "MODE": 156, "FROM": 157, "table_references": 158, "partitionOpt": 159, "escaped_table_reference": 160, "table_reference": 161, "OJ": 162, "join_inner_cross": 163, "INNER": 164, "CROSS": 165, "left_right": 166, "LEFT": 167, "RIGHT": 168, "out_opt": 169, "OUTER": 170, "left_right_out_opt": 171, "join_table": 172, "JOIN": 173, "table_factor": 174, "join_condition": 175, "on_join_condition": 176, "NATURAL": 177, "join_condition_opt": 178, "ON": 179, "USING": 180, "partition_names": 181, "PARTITION": 182, "aliasOpt": 183, "index_or_key": 184, "INDEX": 185, "KEY": 186, "for_opt": 187, "identifier_list_opt": 188, "index_hint_list_opt": 189, "index_hint_list": 190, "index_hint": 191, "USE": 192, "IGNORE": 193, "FORCE": 194, "PLACE_HOLDER": 195, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 6: "EOF", 8: ";", 14: "UNION", 16: "(", 17: ")", 18: "SELECT", 29: "ALL", 30: "DISTINCT", 31: "DISTINCTROW", 32: "HIGH_PRIORITY", 33: "MAX_STATEMENT_TIME", 34: "=", 35: "NUMERIC", 36: "STRAIGHT_JOIN", 37: "SQL_SMALL_RESULT", 38: "SQL_BIG_RESULT", 39: "SQL_BUFFER_RESULT", 40: "SQL_CACHE", 41: "SQL_NO_CACHE", 42: "SQL_CALC_FOUND_ROWS", 43: ",", 45: "*", 50: "DOT", 51: "AS", 52: "IDENTIFIER", 53: "STRING", 56: "EXPONENT_NUMERIC", 57: "HEX_NUMERIC", 59: "TRUE", 60: "FALSE", 62: "NULL", 71: "WHEN", 72: "THEN", 74: "ELSE", 76: "CASE", 77: "END", 79: "+", 81: "-", 82: "~", 83: "!", 84: "BINARY", 86: "ROW", 87: "EXISTS", 88: "{", 89: "}", 90: "||", 91: "WILDCARD", 93: "|", 94: "&", 95: "<<", 96: ">>", 97: "/", 98: "DIV", 99: "MOD", 100: "%", 101: "^", 103: "NOT", 105: "ESCAPE", 107: "IN", 108: "BETWEEN", 109: "AND", 110: "SOUNDS", 111: "LIKE", 112: "REGEXP", 114: ">=", 115: ">", 116: "<=", 117: "<", 118: "<>", 119: "!=", 121: "ANY", 123: "IS", 125: "UNKNOWN", 126: "OR", 127: "XOR", 129: "WHERE", 133: "WITH", 134: "ROLLUP", 135: "GROUP_BY", 138: "ORDER_BY", 141: "ASC", 142: "DESC", 144: "HAVING", 146: "LIMIT", 147: "OFFSET", 150: "PROCEDURE", 152: "FOR", 153: "UPDATE", 154: "LOCK", 155: "SHARE", 156: "MODE", 157: "FROM", 162: "OJ", 164: "INNER", 165: "CROSS", 167: "LEFT", 168: "RIGHT", 170: "OUTER", 173: "JOIN", 177: "NATURAL", 179: "ON", 180: "USING", 182: "PARTITION", 185: "INDEX", 186: "KEY", 192: "USE", 193: "IGNORE", 194: "FORCE", 195: "PLACE_HOLDER" },
    productions_: [0, [3, 3], [3, 3], [5, 1], [5, 0], [7, 1], [7, 3], [10, 4], [10, 4], [13, 3], [9, 4], [9, 4], [4, 12], [15, 1], [15, 1], [15, 1], [15, 0], [19, 1], [19, 0], [20, 3], [20, 0], [21, 1], [21, 0], [22, 1], [22, 0], [23, 1], [23, 0], [24, 1], [24, 0], [25, 0], [25, 1], [25, 1], [26, 1], [26, 0], [27, 3], [27, 1], [44, 1], [44, 1], [44, 2], [46, 3], [48, 0], [48, 2], [48, 1], [48, 2], [48, 1], [54, 1], [55, 1], [55, 1], [55, 1], [58, 1], [58, 1], [61, 1], [63, 1], [63, 1], [63, 1], [63, 1], [63, 1], [65, 4], [66, 3], [66, 1], [67, 0], [67, 1], [67, 1], [67, 2], [67, 1], [49, 1], [49, 3], [68, 1], [68, 3], [69, 0], [69, 1], [70, 4], [70, 5], [73, 0], [73, 2], [75, 5], [78, 2], [78, 2], [78, 2], [78, 2], [78, 2], [80, 1], [80, 1], [80, 1], [80, 1], [80, 3], [80, 4], [80, 3], [80, 4], [80, 4], [80, 1], [80, 3], [80, 3], [80, 5], [92, 1], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [92, 3], [102, 0], [102, 1], [104, 0], [104, 2], [106, 1], [106, 6], [106, 6], [106, 6], [106, 4], [106, 5], [106, 4], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [120, 1], [120, 1], [122, 1], [122, 4], [122, 3], [122, 6], [124, 1], [124, 1], [47, 1], [47, 4], [47, 2], [47, 3], [47, 3], [47, 3], [85, 1], [85, 3], [128, 0], [128, 2], [130, 0], [130, 1], [132, 0], [132, 2], [131, 3], [11, 0], [11, 1], [137, 3], [136, 1], [136, 3], [139, 2], [140, 0], [140, 1], [140, 1], [143, 0], [143, 2], [145, 2], [145, 4], [145, 4], [12, 0], [12, 1], [148, 0], [148, 1], [149, 2], [151, 0], [151, 2], [151, 4], [28, 0], [28, 10], [158, 1], [158, 3], [160, 1], [160, 4], [163, 0], [163, 1], [163, 1], [166, 1], [166, 1], [169, 0], [169, 1], [171, 0], [171, 2], [172, 4], [172, 5], [172, 4], [172, 6], [172, 5], [178, 0], [178, 1], [176, 2], [175, 1], [175, 4], [161, 1], [161, 1], [181, 1], [181, 3], [159, 0], [159, 4], [183, 0], [183, 2], [183, 1], [184, 1], [184, 1], [187, 0], [187, 2], [187, 2], [187, 2], [188, 0], [188, 1], [189, 0], [189, 1], [190, 1], [190, 3], [191, 6], [191, 6], [191, 6], [174, 4], [174, 4], [174, 3], [64, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
        case 2:
          return { nodeType: "Main", value: $$[$0 - 2], hasSemicolon: $$[$0 - 1] };
          break;
        case 3:
        case 146:
          this.$ = true;
          break;
        case 4:
          this.$ = false;
          break;
        case 5:
        case 13:
        case 14:
        case 15:
        case 17:
        case 19:
        case 21:
        case 23:
        case 25:
        case 27:
        case 30:
        case 31:
        case 32:
        case 37:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 61:
        case 62:
        case 64:
        case 70:
        case 74:
        case 81:
        case 82:
        case 83:
        case 84:
        case 90:
        case 94:
        case 108:
        case 110:
        case 111:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
        case 123:
        case 124:
        case 125:
        case 126:
        case 127:
        case 131:
        case 133:
        case 142:
        case 144:
        case 149:
        case 155:
        case 156:
        case 158:
        case 163:
        case 165:
        case 166:
        case 177:
        case 178:
        case 179:
        case 180:
        case 182:
        case 191:
        case 193:
        case 195:
        case 196:
        case 204:
        case 205:
        case 211:
        case 213:
          this.$ = $$[$0];
          break;
        case 6:
          this.$ = $$[$0 - 2], this.$.orderBy = $$[$0 - 1], this.$.limit = $$[$0];
          ;
          break;
        case 7:
        case 8:
          this.$ = { type: "Union", left: $$[$0 - 3], distinctOpt: $$[$0 - 1], right: $$[$0] };
          ;
          break;
        case 9:
          this.$ = { type: "SelectParenthesized", value: $$[$0 - 1] };
          ;
          break;
        case 10:
        case 11:
          this.$ = { type: "Union", left: $$[$0 - 3], distinctOpt: $$[$0 - 1], right: $$[$0] };
          break;
        case 12:
          this.$ = {
            type: "Select",
            distinctOpt: $$[$0 - 10],
            highPriorityOpt: $$[$0 - 9],
            maxStateMentTimeOpt: $$[$0 - 8],
            straightJoinOpt: $$[$0 - 7],
            sqlSmallResultOpt: $$[$0 - 6],
            sqlBigResultOpt: $$[$0 - 5],
            sqlBufferResultOpt: $$[$0 - 4],
            sqlCacheOpt: $$[$0 - 3],
            sqlCalcFoundRowsOpt: $$[$0 - 2],
            selectItems: $$[$0 - 1],
            from: $$[$0].from,
            partition: $$[$0].partition,
            where: $$[$0].where,
            groupBy: $$[$0].groupBy,
            having: $$[$0].having,
            orderBy: $$[$0].orderBy,
            limit: $$[$0].limit,
            procedure: $$[$0].procedure,
            updateLockMode: $$[$0].updateLockMode
          };
          break;
        case 16:
        case 18:
        case 20:
        case 22:
        case 24:
        case 26:
        case 28:
        case 29:
        case 33:
        case 60:
        case 69:
        case 73:
        case 107:
        case 109:
        case 141:
        case 143:
        case 145:
        case 148:
        case 154:
        case 157:
        case 162:
        case 164:
        case 167:
        case 176:
        case 181:
        case 190:
        case 199:
        case 206:
        case 210:
        case 212:
          this.$ = null;
          break;
        case 34:
          $$[$0 - 2].value.push($$[$0]);
          break;
        case 35:
          this.$ = { type: "SelectExpr", value: [$$[$0]] };
          break;
        case 36:
        case 65:
          this.$ = { type: "Identifier", value: $$[$0] };
          break;
        case 38:
          this.$ = $$[$0 - 1];
          this.$.alias = $$[$0].alias;
          this.$.hasAs = $$[$0].hasAs;
          ;
          break;
        case 39:
        case 66:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].value += "." + $$[$0];
          break;
        case 40:
        case 201:
          this.$ = { alias: null, hasAs: null };
          break;
        case 41:
        case 43:
          this.$ = { alias: $$[$0], hasAs: true };
          break;
        case 42:
          this.$ = { alias: $$[$0], hasAs: false };
          break;
        case 44:
          this.$ = { alias: $$[$01], hasAs: false };
          break;
        case 45:
          this.$ = { type: "String", value: $$[$0] };
          break;
        case 46:
        case 47:
        case 48:
          this.$ = { type: "Number", value: $$[$0] };
          break;
        case 49:
          this.$ = { type: "Boolean", value: "TRUE" };
          break;
        case 50:
          this.$ = { type: "Boolean", value: "FALSE" };
          break;
        case 51:
          this.$ = { type: "Null", value: "null" };
          break;
        case 57:
          this.$ = { type: "FunctionCall", name: $$[$0 - 3], params: $$[$0 - 1] };
          break;
        case 58:
          $$[$0 - 2].push($$[$0]);
          this.$ = $$[$0 - 2];
          break;
        case 59:
          this.$ = [$$[$0]];
          ;
          break;
        case 63:
          this.$ = { type: "FunctionCallParam", distinctOpt: $$[$0 - 1], value: $$[$0] };
          break;
        case 67:
          this.$ = { type: "IdentifierList", value: [$$[$0]] };
          break;
        case 68:
        case 173:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].value.push($$[$0]);
          ;
          break;
        case 71:
          this.$ = { type: "WhenThenList", value: [{ when: $$[$0 - 2], then: $$[$0] }] };
          ;
          break;
        case 72:
          this.$ = $$[$0 - 4];
          this.$.value.push({ when: $$[$0 - 2], then: $$[$0] });
          ;
          break;
        case 75:
          this.$ = { type: "CaseWhen", caseExprOpt: $$[$0 - 3], whenThenList: $$[$0 - 2], else: $$[$0 - 1] };
          break;
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
          this.$ = { type: "Prefix", prefix: $$[$0 - 1], value: $$[$0] };
          break;
        case 85:
          this.$ = { type: "SimpleExprParentheses", value: $$[$0 - 1] };
          break;
        case 86:
          this.$ = { type: "SimpleExprParentheses", value: $$[$0 - 2], hasRow: true };
          break;
        case 87:
          this.$ = { type: "SubQuery", value: $$[$0 - 1] };
          break;
        case 88:
          this.$ = { type: "SubQuery", value: $$[$0 - 1], hasExists: true };
          break;
        case 89:
          this.$ = { type: "IdentifierExpr", identifier: $$[$0 - 2], value: $$[$0 - 1] };
          break;
        case 91:
          this.$ = { type: "StartsWithExpr", value: $$[$0 - 2] };
          break;
        case 92:
          this.$ = { type: "EndsWithExpr", value: $$[$0] };
          break;
        case 93:
          this.$ = { type: "ContainsExpr", value: $$[$0 - 2] };
          break;
        case 95:
          this.$ = { type: "BitExpression", operator: "|", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 96:
          this.$ = { type: "BitExpression", operator: "&", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 97:
          this.$ = { type: "BitExpression", operator: "<<", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 98:
          this.$ = { type: "BitExpression", operator: ">>", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 99:
          this.$ = { type: "BitExpression", operator: "+", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 100:
          this.$ = { type: "BitExpression", operator: "-", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 101:
          this.$ = { type: "BitExpression", operator: "*", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 102:
          this.$ = { type: "BitExpression", operator: "/", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 103:
          this.$ = { type: "BitExpression", operator: "DIV", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 104:
          this.$ = { type: "BitExpression", operator: "MOD", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 105:
          this.$ = { type: "BitExpression", operator: "%", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 106:
          this.$ = { type: "BitExpression", operator: "^", left: $$[$0 - 2], right: $$[$0] };
          break;
        case 112:
          this.$ = { type: "InSubQueryPredicate", hasNot: $$[$0 - 4], left: $$[$0 - 5], right: $$[$0 - 1] };
          break;
        case 113:
          this.$ = { type: "InExpressionListPredicate", hasNot: $$[$0 - 4], left: $$[$0 - 5], right: $$[$0 - 1] };
          break;
        case 114:
          this.$ = { type: "BetweenPredicate", hasNot: $$[$0 - 4], left: $$[$0 - 5], right: { left: $$[$0 - 2], right: $$[$0] } };
          break;
        case 115:
          this.$ = { type: "SoundsLikePredicate", hasNot: false, left: $$[$0 - 3], right: $$[$0] };
          break;
        case 116:
          this.$ = { type: "LikePredicate", hasNot: $$[$0 - 3], left: $$[$0 - 4], right: $$[$0 - 1], escape: $$[$0] };
          break;
        case 117:
          this.$ = { type: "RegexpPredicate", hasNot: $$[$0 - 2], left: $$[$0 - 3], right: $$[$0] };
          break;
        case 128:
          this.$ = { type: "IsNullBooleanPrimary", hasNot: $$[$0 - 1], value: $$[$0 - 3] };
          break;
        case 129:
          this.$ = { type: "ComparisonBooleanPrimary", left: $$[$0 - 2], operator: $$[$0 - 1], right: $$[$0] };
          break;
        case 130:
          this.$ = { type: "ComparisonSubQueryBooleanPrimary", operator: $$[$0 - 4], subQueryOpt: $$[$0 - 3], left: $$[$0 - 5], right: $$[$0 - 1] };
          break;
        case 132:
          this.$ = { type: "BooleanExtra", value: $$[$0] };
          break;
        case 134:
          this.$ = { type: "IsExpression", hasNot: $$[$0 - 1], left: $$[$0 - 3], right: $$[$0] };
          break;
        case 135:
          this.$ = { type: "NotExpression", value: $$[$0] };
          break;
        case 136:
          this.$ = { type: "OrExpression", operator: $$[$0 - 1], left: $$[$0 - 2], right: $$[$0] };
          break;
        case 137:
          this.$ = { type: "AndExpression", operator: $$[$0 - 1], left: $$[$0 - 2], right: $$[$0] };
          break;
        case 138:
          this.$ = { type: "XorExpression", operator: $$[$0 - 1], left: $$[$0 - 2], right: $$[$0] };
          break;
        case 139:
          this.$ = { type: "ExpressionList", value: [$$[$0]] };
          break;
        case 140:
        case 215:
          this.$ = $$[$0 - 2];
          this.$.value.push($$[$0]);
          ;
          break;
        case 147:
          this.$ = { type: "GroupBy", value: $$[$0 - 1], rollUp: $$[$0] };
          break;
        case 150:
          this.$ = { type: "OrderBy", value: $$[$0 - 1], rollUp: $$[$0] };
          break;
        case 151:
        case 197:
          this.$ = [$$[$0]];
          break;
        case 152:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].push($$[$0]);
          ;
          break;
        case 153:
          this.$ = { type: "GroupByOrderByItem", value: $$[$0 - 1], sortOpt: $$[$0] };
          break;
        case 159:
          this.$ = { type: "Limit", value: [$$[$0]] };
          break;
        case 160:
          this.$ = { type: "Limit", value: [$$[$0 - 2], $$[$0]] };
          break;
        case 161:
          this.$ = { type: "Limit", value: [$$[$0], $$[$0 - 2]], offsetMode: true };
          break;
        case 168:
          this.$ = $$[$0 - 1] + " " + $$[$0];
          break;
        case 169:
          this.$ = $$[$0 - 3] + " " + $$[$0 - 2] + " " + $$[$0 - 1] + " " + $$[$0];
          break;
        case 170:
          this.$ = {};
          break;
        case 171:
          this.$ = { from: $$[$0 - 8], partition: $$[$0 - 7], where: $$[$0 - 6], groupBy: $$[$0 - 5], having: $$[$0 - 4], orderBy: $$[$0 - 3], limit: $$[$0 - 2], procedure: $$[$0 - 1], updateLockMode: $$[$0] };
          break;
        case 172:
          this.$ = { type: "TableReferences", value: [$$[$0]] };
          break;
        case 174:
          this.$ = { type: "TableReference", value: $$[$0] };
          break;
        case 175:
          this.$ = { type: "TableReference", hasOj: true, value: $$[$0 - 1] };
          break;
        case 183:
          this.$ = { leftRight: null, outOpt: null };
          break;
        case 184:
          this.$ = { leftRight: $$[$0 - 1], outOpt: $$[$0] };
          break;
        case 185:
          this.$ = { type: "InnerCrossJoinTable", innerCrossOpt: $$[$0 - 2], left: $$[$0 - 3], right: $$[$0], condition: null };
          break;
        case 186:
          this.$ = { type: "InnerCrossJoinTable", innerCrossOpt: $$[$0 - 3], left: $$[$0 - 4], right: $$[$0 - 1], condition: $$[$0] };
          break;
        case 187:
          this.$ = { type: "StraightJoinTable", left: $$[$0 - 3], right: $$[$0 - 1], condition: $$[$0] };
          break;
        case 188:
          this.$ = { type: "LeftRightJoinTable", leftRight: $$[$0 - 4], outOpt: $$[$0 - 3], left: $$[$0 - 5], right: $$[$0 - 1], condition: $$[$0] };
          break;
        case 189:
          this.$ = { type: "NaturalJoinTable", leftRight: $$[$0 - 2].leftRight, outOpt: $$[$0 - 2].outOpt, left: $$[$0 - 4], right: $$[$0] };
          break;
        case 192:
          this.$ = { type: "OnJoinCondition", value: $$[$0] };
          break;
        case 194:
          this.$ = { type: "UsingJoinCondition", value: $$[$0 - 1] };
          break;
        case 198:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].push($$[$0]);
          break;
        case 200:
          this.$ = { type: "Partitions", value: $$[$0 - 1] };
          break;
        case 202:
          this.$ = { hasAs: true, alias: $$[$0] };
          break;
        case 203:
          this.$ = { hasAs: false, alias: $$[$0] };
          break;
        case 207:
        case 208:
        case 209:
          this.$ = { type: "ForOptIndexHint", value: $$[$0] };
          break;
        case 214:
          this.$ = { type: "IndexHintList", value: [$$[$0]] };
          break;
        case 216:
          this.$ = { type: "UseIndexHint", value: $$[$0 - 1], forOpt: $$[$0 - 3], indexOrKey: $$[$0 - 4] };
          break;
        case 217:
          this.$ = { type: "IgnoreIndexHint", value: $$[$0 - 1], forOpt: $$[$0 - 3], indexOrKey: $$[$0 - 4] };
          break;
        case 218:
          this.$ = { type: "ForceIndexHint", value: $$[$0 - 1], forOpt: $$[$0 - 3], indexOrKey: $$[$0 - 4] };
          break;
        case 219:
          this.$ = { type: "TableFactor", value: $$[$0 - 3], partition: $$[$0 - 2], alias: $$[$0 - 1].alias, hasAs: $$[$0 - 1].hasAs, indexHintOpt: $$[$0] };
          break;
        case 220:
          this.$ = { type: "TableFactor", value: { type: "SubQuery", value: $$[$0 - 2] }, alias: $$[$0].alias, hasAs: $$[$0].hasAs };
          break;
        case 221:
          this.$ = $$[$0 - 1];
          this.$.hasParentheses = true;
          break;
        case 222:
          this.$ = { type: "PlaceHolder", value: $$[$0], param: $$[$0].slice(2, -1) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 7: 3, 9: 5, 10: 6, 13: 7, 16: $V0, 18: $V1 }, { 1: [3] }, { 5: 9, 6: $V2, 8: $V3, 14: $V4 }, { 5: 12, 6: $V2, 8: $V3 }, o([16, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 52, 53, 56, 57, 59, 60, 62, 76, 79, 81, 82, 83, 84, 86, 87, 88, 91, 103, 195], $V5, { 15: 13, 29: $V6, 30: $V7, 31: $V8 }), o($V9, [2, 5]), o([6, 8, 146], $Va, { 11: 17, 137: 18, 138: $Vb }), { 14: $Vc }, { 4: 21, 18: $V1 }, { 6: [1, 22] }, { 15: 23, 18: $V5, 29: $V6, 30: $V7, 31: $V8 }, { 6: [2, 3] }, { 6: [1, 24] }, o($Vd, [2, 18], { 19: 25, 32: [1, 26] }), o($Ve, [2, 13]), o($Ve, [2, 14]), o($Ve, [2, 15]), o($V9, $Vf, { 12: 27, 145: 28, 146: $Vg }), o($Vh, [2, 149]), { 16: $Vi, 35: $Vj, 47: 32, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 136: 30, 139: 31, 195: $VC }, { 15: 68, 16: $V5, 29: $V6, 30: $V7, 31: $V8 }, { 17: [1, 69] }, { 1: [2, 1] }, { 4: 70, 9: 71, 18: $V1 }, { 1: [2, 2] }, o($VD, [2, 20], { 20: 72, 33: [1, 73] }), o($Vd, [2, 17]), o($V9, [2, 6]), o($VE, [2, 163]), { 35: [1, 74] }, o($Vh, $VF, { 132: 75, 43: $VG, 133: $VH }), o($VI, [2, 151]), o($VI, [2, 154], { 140: 78, 109: $VJ, 126: $VK, 127: $VL, 141: [1, 82], 142: [1, 83] }), o($VM, [2, 133], { 113: 85, 34: [1, 86], 114: [1, 87], 115: [1, 88], 116: [1, 89], 117: [1, 90], 118: [1, 91], 119: [1, 92], 123: [1, 84] }), { 16: $Vi, 35: $Vj, 47: 93, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($VN, [2, 127]), o($VN, [2, 111], { 102: 94, 45: $VO, 79: $VP, 81: $VQ, 93: $VR, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ, 103: $V_, 107: $V$, 108: $V$, 111: $V$, 112: $V$, 110: [1, 95] }), o($V01, [2, 94]), o($V11, [2, 81]), o($V11, $V21, { 50: $V31, 90: $V41 }), o($V11, [2, 83]), o($V11, [2, 84]), { 4: 112, 16: $Vi, 18: $V1, 35: $Vj, 47: 113, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 85: 111, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: [1, 114] }, { 16: [1, 115] }, { 49: 116, 52: $V51 }, o($V11, [2, 90]), { 90: [1, 118] }, o($V11, [2, 52]), o($V11, [2, 53]), o($V11, [2, 54]), o($V11, [2, 55]), o($V11, [2, 56]), o([6, 8, 14, 17, 34, 36, 43, 45, 50, 51, 52, 53, 71, 72, 74, 77, 79, 81, 89, 90, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], $V61, { 16: $V71 }), { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 120, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 121, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 122, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 123, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 124, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 47: 126, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 69: 125, 71: [2, 69], 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($V11, [2, 45]), o($V11, [2, 46]), o($V11, [2, 47]), o($V11, [2, 48]), o($V11, [2, 49]), o($V11, [2, 50]), o($V11, [2, 51]), o($V11, [2, 222]), { 10: 128, 13: 127, 16: $V0 }, o([6, 8, 14, 138, 146], [2, 9]), o($V9, [2, 10], { 14: $V4 }), o($V9, [2, 11]), o($V81, [2, 22], { 21: 129, 36: [1, 130] }), { 34: [1, 131] }, o($VE, [2, 159], { 43: [1, 132], 147: [1, 133] }), o($Vh, [2, 150]), { 16: $Vi, 35: $Vj, 47: 32, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 139: 134, 195: $VC }, { 134: [1, 135] }, o($VI, [2, 153]), { 16: $Vi, 35: $Vj, 47: 136, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vi, 35: $Vj, 47: 137, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vi, 35: $Vj, 47: 138, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($VI, [2, 155]), o($VI, [2, 156]), o([59, 60, 62, 125], $V$, { 102: 139, 103: $V_ }), { 16: $Vi, 29: [1, 142], 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 106: 140, 120: 141, 121: [1, 143], 195: $VC }, o($V91, [2, 118]), o($V91, [2, 119]), o($V91, [2, 120]), o($V91, [2, 121]), o($V91, [2, 122]), o($V91, [2, 123]), o($V91, [2, 124]), o($VM, [2, 135]), { 107: [1, 144], 108: [1, 145], 111: [1, 146], 112: [1, 147] }, { 111: [1, 148] }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 149, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 150, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 151, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 152, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 153, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 154, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 155, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 156, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 157, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 158, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 159, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 160, 195: $VC }, o([59, 60, 62, 107, 108, 111, 112, 125], [2, 108]), { 91: [1, 161] }, { 52: $Va1 }, { 17: [1, 163], 43: $Vb1 }, { 17: [1, 165] }, o($Vc1, [2, 139], { 109: $VJ, 126: $VK, 127: $VL }), { 16: $Vi, 35: $Vj, 47: 113, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 85: 166, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 4: 167, 18: $V1 }, { 16: $Vi, 35: $Vj, 47: 168, 49: 39, 50: $V31, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vd1, $V61), { 49: 169, 52: $V51 }, o($Vc1, $Ve1, { 122: 33, 106: 35, 92: 36, 80: 37, 63: 38, 65: 40, 78: 41, 75: 46, 54: 48, 55: 49, 58: 50, 61: 51, 64: 52, 66: 170, 67: 171, 46: 173, 47: 175, 49: 176, 16: $Vi, 30: $Vf1, 35: $Vj, 45: $Vg1, 52: $Vk, 53: $Vl, 56: $Vm, 57: $Vn, 59: $Vo, 60: $Vp, 62: $Vq, 76: $Vr, 79: $Vs, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 103: $VB, 195: $VC }), o($V11, [2, 76]), o($V11, [2, 77]), o($V11, [2, 78]), o($V11, [2, 79]), o($V11, [2, 80]), { 70: 177, 71: [1, 178] }, { 71: [2, 70], 109: $VJ, 126: $VK, 127: $VL }, o($Vh1, [2, 7], { 14: $Vc }), o($Vh1, [2, 8]), o($Vi1, [2, 24], { 22: 179, 37: [1, 180] }), o($V81, [2, 21]), { 35: [1, 181] }, { 35: [1, 182] }, { 35: [1, 183] }, o($VI, [2, 152]), o($Vj1, [2, 146]), o($Vk1, [2, 136], { 109: $VJ }), o($VM, [2, 137]), o($Vk1, [2, 138], { 109: $VJ }), { 58: 186, 59: $Vo, 60: $Vp, 62: [1, 185], 124: 184, 125: [1, 187] }, o($VN, [2, 129]), { 16: [1, 188] }, { 16: [2, 125] }, { 16: [2, 126] }, { 16: [1, 189] }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 190, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 191, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 192, 195: $VC }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 193, 195: $VC }, o([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 95], { 45: $VO, 79: $VP, 81: $VQ, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ }), o([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 94, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 96], { 45: $VO, 79: $VP, 81: $VQ, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($Vl1, [2, 97], { 45: $VO, 79: $VP, 81: $VQ, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($Vl1, [2, 98], { 45: $VO, 79: $VP, 81: $VQ, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($Vm1, [2, 99], { 45: $VO, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($Vm1, [2, 100], { 45: $VO, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($V01, [2, 101]), o($V01, [2, 102]), o($V01, [2, 103]), o($V01, [2, 104]), o($V01, [2, 105]), o([6, 8, 14, 17, 34, 36, 43, 51, 52, 53, 71, 72, 74, 77, 89, 93, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 129, 133, 135, 138, 141, 142, 144, 146, 150, 152, 154, 157, 164, 165, 167, 168, 173, 177, 179, 180, 182], [2, 106], { 45: $VO, 79: $VP, 81: $VQ, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY }), o($V11, [2, 91]), o($Vd1, [2, 66]), o($V11, [2, 85]), { 16: $Vi, 35: $Vj, 47: 194, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($V11, [2, 87]), { 17: [1, 195], 43: $Vb1 }, { 17: [1, 196] }, { 89: [1, 197], 109: $VJ, 126: $VK, 127: $VL }, o($V11, [2, 92], { 50: $V31, 90: [1, 198] }), { 17: [1, 199], 43: [1, 200] }, o($Vc1, [2, 59]), o($Vc1, [2, 61]), o($Vc1, [2, 62]), { 16: $Vi, 35: $Vj, 47: 201, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vc1, [2, 64], { 109: $VJ, 126: $VK, 127: $VL }), o([6, 8, 14, 17, 34, 43, 45, 51, 52, 53, 79, 81, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 123, 126, 127, 157], $V21, { 50: [1, 202], 90: $V41 }), { 71: [1, 204], 73: 203, 74: [1, 205], 77: [2, 73] }, { 16: $Vi, 35: $Vj, 47: 206, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vn1, [2, 26], { 23: 207, 38: [1, 208] }), o($Vi1, [2, 23]), o($VD, [2, 19]), o($VE, [2, 160]), o($VE, [2, 161]), o($VM, [2, 134]), o($VN, [2, 128]), o($VM, [2, 131]), o($VM, [2, 132]), { 4: 209, 18: $V1 }, { 4: 210, 16: $Vi, 18: $V1, 35: $Vj, 47: 113, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 85: 211, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 45: $VO, 79: $VP, 81: $VQ, 93: $VR, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ, 109: [1, 212] }, o($VN, [2, 109], { 104: 213, 105: [1, 214] }), o($VN, [2, 117], { 45: $VO, 79: $VP, 81: $VQ, 93: $VR, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ }), o($VN, [2, 115], { 45: $VO, 79: $VP, 81: $VQ, 93: $VR, 94: $VS, 95: $VT, 96: $VU, 97: $VV, 98: $VW, 99: $VX, 100: $VY, 101: $VZ }), o($Vc1, [2, 140], { 109: $VJ, 126: $VK, 127: $VL }), o($V11, [2, 86]), o($V11, [2, 88]), o($V11, [2, 89]), { 91: [1, 215] }, o($V11, [2, 57]), o($Vc1, $Ve1, { 122: 33, 106: 35, 92: 36, 80: 37, 63: 38, 65: 40, 78: 41, 75: 46, 54: 48, 55: 49, 58: 50, 61: 51, 64: 52, 46: 173, 47: 175, 49: 176, 67: 216, 16: $Vi, 30: $Vf1, 35: $Vj, 45: $Vg1, 52: $Vk, 53: $Vl, 56: $Vm, 57: $Vn, 59: $Vo, 60: $Vp, 62: $Vq, 76: $Vr, 79: $Vs, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 103: $VB, 195: $VC }), o($Vc1, [2, 63], { 109: $VJ, 126: $VK, 127: $VL }), { 45: [1, 217], 52: $Va1 }, { 77: [1, 218] }, { 16: $Vi, 35: $Vj, 47: 219, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vi, 35: $Vj, 47: 220, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 72: [1, 221], 109: $VJ, 126: $VK, 127: $VL }, o($Vo1, [2, 28], { 24: 222, 39: [1, 223] }), o($Vn1, [2, 25]), { 17: [1, 224] }, { 17: [1, 225] }, { 17: [1, 226], 43: $Vb1 }, { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 106: 227, 195: $VC }, o($VN, [2, 116]), { 16: $Vi, 35: $Vj, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 228, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 195: $VC }, o($V11, [2, 93]), o($Vc1, [2, 58]), o($Vp1, [2, 39]), o($V11, [2, 75]), { 72: [1, 229], 109: $VJ, 126: $VK, 127: $VL }, { 77: [2, 74], 109: $VJ, 126: $VK, 127: $VL }, { 16: $Vi, 35: $Vj, 47: 230, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vq1, [2, 29], { 25: 231, 40: [1, 232], 41: [1, 233] }), o($Vo1, [2, 27]), o($VN, [2, 130]), o($VN, [2, 112]), o($VN, [2, 113]), o($VN, [2, 114]), o($VN, [2, 110]), { 16: $Vi, 35: $Vj, 47: 234, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vr1, [2, 71], { 109: $VJ, 126: $VK, 127: $VL }), o($Vs1, [2, 33], { 26: 235, 42: [1, 236] }), o($Vq1, [2, 30]), o($Vq1, [2, 31]), o($Vr1, [2, 72], { 109: $VJ, 126: $VK, 127: $VL }), { 16: $Vi, 27: 237, 35: $Vj, 44: 238, 45: $Vt1, 46: 240, 47: 241, 49: 176, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vs1, [2, 32]), o($Vu1, [2, 170], { 28: 242, 43: [1, 243], 157: [1, 244] }), o($Vp1, [2, 35]), o($Vp1, [2, 36]), o($Vp1, [2, 37]), o($Vp1, [2, 40], { 48: 245, 51: [1, 246], 52: [1, 247], 53: [1, 248], 109: $VJ, 126: $VK, 127: $VL }), o($Vu1, [2, 12]), { 16: $Vi, 35: $Vj, 44: 249, 45: $Vt1, 46: 240, 47: 241, 49: 176, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vv1, 49: 256, 52: $V51, 88: $Vw1, 158: 250, 160: 251, 161: 252, 172: 255, 174: 254 }, o($Vp1, [2, 38]), { 52: [1, 258], 53: [1, 259] }, o($Vp1, [2, 42]), o($Vp1, [2, 44]), o($Vp1, [2, 34]), o([6, 8, 14, 17, 129, 135, 138, 144, 146, 150, 152, 154], $Vx1, { 159: 260, 43: $Vy1, 182: $Vz1 }), o($VA1, [2, 172]), o($VA1, [2, 174], { 163: 263, 166: 265, 36: $VB1, 164: $VC1, 165: $VD1, 167: $VE1, 168: $VF1, 173: $VG1, 177: $VH1 }), { 162: [1, 271] }, o($VI1, [2, 195]), o($VI1, [2, 196]), o([6, 8, 14, 17, 36, 43, 51, 52, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 192, 193, 194], $Vx1, { 159: 272, 50: $V31, 182: $Vz1 }), { 4: 273, 16: $Vv1, 18: $V1, 49: 256, 52: $V51, 88: $Vw1, 158: 274, 160: 251, 161: 252, 172: 255, 174: 254 }, o($Vp1, [2, 41]), o($Vp1, [2, 43]), o($VJ1, [2, 141], { 128: 275, 129: [1, 276] }), { 16: $Vv1, 49: 256, 52: $V51, 88: $Vw1, 160: 277, 161: 252, 172: 255, 174: 254 }, { 16: [1, 278] }, { 173: [1, 279] }, { 16: $Vv1, 49: 256, 52: $V51, 174: 280 }, { 169: 281, 170: $VK1, 173: $VL1 }, { 166: 284, 167: $VE1, 168: $VF1, 171: 283, 173: [2, 183] }, { 173: [2, 177] }, { 173: [2, 178] }, o($VM1, [2, 179]), o($VM1, [2, 180]), { 16: $Vv1, 49: 256, 52: $V51, 161: 285, 172: 255, 174: 254 }, o($VN1, $VO1, { 183: 286, 49: 288, 51: $VP1, 52: $V51 }), { 17: [1, 289] }, { 17: [1, 290], 43: $Vy1 }, o($Vj1, [2, 143], { 130: 291, 131: 292, 135: [1, 293] }), { 16: $Vi, 35: $Vj, 47: 294, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($VA1, [2, 173]), { 49: 296, 52: $V51, 181: 295 }, { 16: $Vv1, 49: 256, 52: $V51, 174: 297 }, { 176: 298, 179: $VQ1 }, { 173: [1, 300] }, { 173: [2, 182] }, { 173: [1, 301] }, { 169: 302, 170: $VK1, 173: $VL1 }, { 36: $VB1, 89: [1, 303], 163: 263, 164: $VC1, 165: $VD1, 166: 265, 167: $VE1, 168: $VF1, 173: $VG1, 177: $VH1 }, o($VI1, [2, 212], { 189: 304, 190: 305, 191: 306, 192: $VR1, 193: $VS1, 194: $VT1 }), { 49: 310, 52: $V51 }, o($VN1, [2, 203], { 50: $V31 }), o($VI1, $VO1, { 49: 288, 183: 311, 51: $VP1, 52: $V51 }), o($VI1, [2, 221]), o($VU1, [2, 157], { 143: 312, 144: [1, 313] }), o($Vj1, [2, 144]), { 16: $Vi, 35: $Vj, 47: 32, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 136: 314, 139: 31, 195: $VC }, o($VJ1, [2, 142], { 109: $VJ, 126: $VK, 127: $VL }), { 17: [1, 315], 43: [1, 316] }, o($Vc1, [2, 197], { 50: $V31 }), o([6, 8, 14, 17, 36, 43, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 182], [2, 185], { 175: 317, 176: 318, 179: $VQ1, 180: $VV1 }), o($VI1, [2, 187]), { 16: $Vi, 35: $Vj, 47: 320, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, { 16: $Vv1, 49: 256, 52: $V51, 161: 321, 172: 255, 174: 254 }, { 16: $Vv1, 49: 256, 52: $V51, 174: 322 }, { 173: [2, 184] }, o($VA1, [2, 175]), o($VI1, [2, 219]), o($VI1, [2, 213]), o($VI1, [2, 214]), { 184: 324, 185: $VW1, 186: $VX1 }, { 184: 327, 185: $VW1, 186: $VX1 }, { 184: 328, 185: $VW1, 186: $VX1 }, o($VN1, [2, 202], { 50: $V31 }), o($VI1, [2, 220]), o($Vh, $Va, { 137: 18, 11: 329, 138: $Vb }), { 16: $Vi, 35: $Vj, 47: 330, 49: 39, 52: $Vk, 53: $Vl, 54: 48, 55: 49, 56: $Vm, 57: $Vn, 58: 50, 59: $Vo, 60: $Vp, 61: 51, 62: $Vq, 63: 38, 64: 52, 65: 40, 75: 46, 76: $Vr, 78: 41, 79: $Vs, 80: 37, 81: $Vt, 82: $Vu, 83: $Vv, 84: $Vw, 86: $Vx, 87: $Vy, 88: $Vz, 91: $VA, 92: 36, 103: $VB, 106: 35, 122: 33, 195: $VC }, o($Vj1, $VF, { 132: 331, 43: $VG, 133: $VH }), o([6, 8, 14, 17, 36, 43, 51, 52, 89, 129, 135, 138, 144, 146, 150, 152, 154, 164, 165, 167, 168, 173, 177, 179, 180, 182, 192, 193, 194], [2, 200]), { 49: 332, 52: $V51 }, o($VI1, [2, 186]), o($VI1, [2, 193]), { 16: [1, 333] }, o($VI1, [2, 192], { 109: $VJ, 126: $VK, 127: $VL }), { 36: $VB1, 163: 263, 164: $VC1, 165: $VD1, 166: 265, 167: $VE1, 168: $VF1, 173: $VG1, 175: 334, 176: 318, 177: $VH1, 179: $VQ1, 180: $VV1 }, o($VI1, [2, 189]), { 191: 335, 192: $VR1, 193: $VS1, 194: $VT1 }, { 16: $VY1, 152: $VZ1, 187: 336 }, o($V_1, [2, 204]), o($V_1, [2, 205]), { 16: $VY1, 152: $VZ1, 187: 338 }, { 16: $VY1, 152: $VZ1, 187: 339 }, o($VE, $Vf, { 145: 28, 12: 340, 146: $Vg }), o($VU1, [2, 158], { 109: $VJ, 126: $VK, 127: $VL }), o($Vj1, [2, 147]), o($Vc1, [2, 198], { 50: $V31 }), { 49: 342, 52: $V51, 68: 341 }, o($VI1, [2, 188]), o($VI1, [2, 215]), { 16: [1, 343] }, { 135: [1, 346], 138: [1, 345], 173: [1, 344] }, { 16: [1, 347] }, { 16: [1, 348] }, o($V$1, [2, 164], { 148: 349, 149: 350, 150: [1, 351] }), { 17: [1, 352], 43: $V02 }, o($Vc1, [2, 67], { 50: $V31 }), { 17: [2, 210], 49: 342, 52: $V51, 68: 355, 188: 354 }, { 16: [2, 207] }, { 16: [2, 208] }, { 16: [2, 209] }, { 49: 342, 52: $V51, 68: 356 }, { 49: 342, 52: $V51, 68: 357 }, o($Vu1, [2, 167], { 151: 358, 152: [1, 359], 154: [1, 360] }), o($V$1, [2, 165]), { 52: [1, 362], 65: 361 }, o($VI1, [2, 194]), { 49: 363, 52: $V51 }, { 17: [1, 364] }, { 17: [2, 211], 43: $V02 }, { 17: [1, 365], 43: $V02 }, { 17: [1, 366], 43: $V02 }, o($Vu1, [2, 171]), { 153: [1, 367] }, { 107: [1, 368] }, o($V$1, [2, 166]), { 16: $V71 }, o($Vc1, [2, 68], { 50: $V31 }), o($VI1, [2, 216]), o($VI1, [2, 217]), o($VI1, [2, 218]), o($Vu1, [2, 168]), { 155: [1, 369] }, { 156: [1, 370] }, o($Vu1, [2, 169])],
    defaultActions: { 11: [2, 3], 22: [2, 1], 24: [2, 2], 142: [2, 125], 143: [2, 126], 267: [2, 177], 268: [2, 178], 282: [2, 182], 302: [2, 184], 344: [2, 207], 345: [2, 208], 346: [2, 209] },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      var lex = function() {
        var token;
        token = lexer2.lex() || EOF;
        if (typeof token !== "number") {
          token = self.symbols_[token] || token;
        }
        return token;
      };
      var symbol, preErrorSymbol, state, action, a, r2, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r2 = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r2 !== "undefined") {
              return r2;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  };
  var lexer = /* @__PURE__ */ function() {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      // resets the lexer, sets new input
      setInput: function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      },
      // unshifts one char (or a string) into the input
      unput: function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r2 = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r2[0], r2[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        this._more = true;
        return this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      },
      // retain first n characters of the match
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      // return next match that has a token
      lex: function lex() {
        var r2 = this.next();
        if (r2) {
          return r2;
        } else {
          return this.lex();
        }
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      },
      // alias for begin(condition)
      pushState: function pushState(condition) {
        this.begin(condition);
      },
      // return the number of states currently on the stack
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            return 195;
            break;
          case 5:
            return 52;
            break;
          case 6:
            return 52;
            break;
          case 7:
            return 52;
            break;
          case 8:
            return 18;
            break;
          case 9:
            return 29;
            break;
          case 10:
            return 121;
            break;
          case 11:
            return 30;
            break;
          case 12:
            return 31;
            break;
          case 13:
            return 32;
            break;
          case 14:
            return 33;
            break;
          case 15:
            return 36;
            break;
          case 16:
            return 37;
            break;
          case 17:
            return 38;
            break;
          case 18:
            return 39;
            break;
          case 19:
            return 40;
            break;
          case 20:
            return 41;
            break;
          case 21:
            return 42;
            break;
          case 22:
            return 51;
            break;
          case 23:
            return 59;
            break;
          case 24:
            return 60;
            break;
          case 25:
            return 62;
            break;
          case 26:
            return "COLLATE";
            break;
          case 27:
            return 84;
            break;
          case 28:
            return 86;
            break;
          case 29:
            return 87;
            break;
          case 30:
            return 76;
            break;
          case 31:
            return 71;
            break;
          case 32:
            return 72;
            break;
          case 33:
            return 74;
            break;
          case 34:
            return 77;
            break;
          case 35:
            return 98;
            break;
          case 36:
            return 99;
            break;
          case 37:
            return 103;
            break;
          case 38:
            return 108;
            break;
          case 39:
            return 107;
            break;
          case 40:
            return 110;
            break;
          case 41:
            return 111;
            break;
          case 42:
            return 105;
            break;
          case 43:
            return 112;
            break;
          case 44:
            return 123;
            break;
          case 45:
            return 125;
            break;
          case 46:
            return 109;
            break;
          case 47:
            return 126;
            break;
          case 48:
            return 127;
            break;
          case 49:
            return 157;
            break;
          case 50:
            return 182;
            break;
          case 51:
            return 192;
            break;
          case 52:
            return 185;
            break;
          case 53:
            return 186;
            break;
          case 54:
            return 152;
            break;
          case 55:
            return 173;
            break;
          case 56:
            return 138;
            break;
          case 57:
            return 135;
            break;
          case 58:
            return 193;
            break;
          case 59:
            return 194;
            break;
          case 60:
            return 164;
            break;
          case 61:
            return 165;
            break;
          case 62:
            return 179;
            break;
          case 63:
            return 180;
            break;
          case 64:
            return 167;
            break;
          case 65:
            return 168;
            break;
          case 66:
            return 170;
            break;
          case 67:
            return 177;
            break;
          case 68:
            return 129;
            break;
          case 69:
            return 141;
            break;
          case 70:
            return 142;
            break;
          case 71:
            return 133;
            break;
          case 72:
            return 134;
            break;
          case 73:
            return 144;
            break;
          case 74:
            return 147;
            break;
          case 75:
            return 150;
            break;
          case 76:
            return 153;
            break;
          case 77:
            return 154;
            break;
          case 78:
            return 155;
            break;
          case 79:
            return 156;
            break;
          case 80:
            return 162;
            break;
          case 81:
            return 146;
            break;
          case 82:
            return 14;
            break;
          case 83:
            return 43;
            break;
          case 84:
            return 34;
            break;
          case 85:
            return 16;
            break;
          case 86:
            return 17;
            break;
          case 87:
            return 82;
            break;
          case 88:
            return 119;
            break;
          case 89:
            return 83;
            break;
          case 90:
            return 90;
            break;
          case 91:
            return 93;
            break;
          case 92:
            return 94;
            break;
          case 93:
            return 79;
            break;
          case 94:
            return 81;
            break;
          case 95:
            return 45;
            break;
          case 96:
            return 97;
            break;
          case 97:
            return 100;
            break;
          case 98:
            return 101;
            break;
          case 99:
            return 96;
            break;
          case 100:
            return 114;
            break;
          case 101:
            return 115;
            break;
          case 102:
            return 95;
            break;
          case 103:
            return "<=>";
            break;
          case 104:
            return 116;
            break;
          case 105:
            return 118;
            break;
          case 106:
            return 117;
            break;
          case 107:
            return 88;
            break;
          case 108:
            return 89;
            break;
          case 109:
            return 8;
            break;
          case 110:
            return 91;
            break;
          case 111:
            return 53;
            break;
          case 112:
            return 57;
            break;
          case 113:
            return 35;
            break;
          case 114:
            return 56;
            break;
          case 115:
            return 52;
            break;
          case 116:
            return 50;
            break;
          case 117:
            return 52;
            break;
          case 118:
            return 6;
            break;
          case 119:
            return "INVALID";
            break;
        }
      },
      rules: [/^(?:[/][*](.|\n)*?[*][/])/i, /^(?:[-][-]\s.*\n)/i, /^(?:[#]\s.*\n)/i, /^(?:\s+)/i, /^(?:[$][{](.*?)[}])/i, /^(?:([`][^`]+[`])+)/i, /^(?:(["][^"]+["])+)/i, /^(?:[\[]([^\]]|\]\])+[\]])/i, /^(?:SELECT\b)/i, /^(?:ALL\b)/i, /^(?:ANY\b)/i, /^(?:DISTINCT\b)/i, /^(?:DISTINCTROW\b)/i, /^(?:HIGH_PRIORITY\b)/i, /^(?:MAX_STATEMENT_TIME\b)/i, /^(?:STRAIGHT_JOIN\b)/i, /^(?:SQL_SMALL_RESULT\b)/i, /^(?:SQL_BIG_RESULT\b)/i, /^(?:SQL_BUFFER_RESULT\b)/i, /^(?:SQL_CACHE\b)/i, /^(?:SQL_NO_CACHE\b)/i, /^(?:SQL_CALC_FOUND_ROWS\b)/i, /^(?:AS\b)/i, /^(?:TRUE\b)/i, /^(?:FALSE\b)/i, /^(?:NULL\b)/i, /^(?:COLLATE\b)/i, /^(?:BINARY\b)/i, /^(?:ROW\b)/i, /^(?:EXISTS\b)/i, /^(?:CASE\b)/i, /^(?:WHEN\b)/i, /^(?:THEN\b)/i, /^(?:ELSE\b)/i, /^(?:END\b)/i, /^(?:DIV\b)/i, /^(?:MOD\b)/i, /^(?:NOT\b)/i, /^(?:BETWEEN\b)/i, /^(?:IN\b)/i, /^(?:SOUNDS\b)/i, /^(?:LIKE\b)/i, /^(?:ESCAPE\b)/i, /^(?:REGEXP\b)/i, /^(?:IS\b)/i, /^(?:UNKNOWN\b)/i, /^(?:AND\b)/i, /^(?:OR\b)/i, /^(?:XOR\b)/i, /^(?:FROM\b)/i, /^(?:PARTITION\b)/i, /^(?:USE\b)/i, /^(?:INDEX\b)/i, /^(?:KEY\b)/i, /^(?:FOR\b)/i, /^(?:JOIN\b)/i, /^(?:ORDER\s+BY\b)/i, /^(?:GROUP\s+BY\b)/i, /^(?:IGNORE\b)/i, /^(?:FORCE\b)/i, /^(?:INNER\b)/i, /^(?:CROSS\b)/i, /^(?:ON\b)/i, /^(?:USING\b)/i, /^(?:LEFT\b)/i, /^(?:RIGHT\b)/i, /^(?:OUTER\b)/i, /^(?:NATURAL\b)/i, /^(?:WHERE\b)/i, /^(?:ASC\b)/i, /^(?:DESC\b)/i, /^(?:WITH\b)/i, /^(?:ROLLUP\b)/i, /^(?:HAVING\b)/i, /^(?:OFFSET\b)/i, /^(?:PROCEDURE\b)/i, /^(?:UPDATE\b)/i, /^(?:LOCK\b)/i, /^(?:SHARE\b)/i, /^(?:MODE\b)/i, /^(?:OJ\b)/i, /^(?:LIMIT\b)/i, /^(?:UNION\b)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\()/i, /^(?:\))/i, /^(?:~)/i, /^(?:!=)/i, /^(?:!)/i, /^(?:\|\|)/i, /^(?:\|)/i, /^(?:&)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:\*)/i, /^(?:\/)/i, /^(?:%)/i, /^(?:\^)/i, /^(?:>>)/i, /^(?:>=)/i, /^(?:>)/i, /^(?:<<)/i, /^(?:<=>)/i, /^(?:<=)/i, /^(?:<>)/i, /^(?:<)/i, /^(?:\{)/i, /^(?:\})/i, /^(?:;)/i, /^(?:['](%)+['])/i, /^(?:(['][^']*['])+)/i, /^(?:[0][x][0-9a-fA-F]+)/i, /^(?:[-]?[0-9]+(\.[0-9]+)?)/i, /^(?:[-]?[0-9]+(\.[0-9]+)?[eE][-+]?[0-9]+(\.[0-9]+)?)/i, /^(?:[a-zA-Z_@#\uff3f\u4e00-\u9fa5][a-zA-Z0-9_$@#\uff3f\u4e00-\u9fa5]*)/i, /^(?:\.)/i, /^(?:([`])(?:(?=(\\?))\2.)*?\1)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119], "inclusive": true } }
    };
    return lexer2;
  }();
  parser.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser;
  parser.Parser = Parser;
  return new Parser();
}();
var isSQLLiteralValue = (v) => (v == null ? void 0 : v.type) === "String" || (v == null ? void 0 : v.type) === "Number" || (v == null ? void 0 : v.type) === "Boolean";
var isSQLSignedNumber = (v) => (v == null ? void 0 : v.type) === "Prefix" && (v.prefix === "+" || v.prefix === "-") && v.value.type === "Number";
var isSQLLiteralOrSignedNumberValue = (v) => isSQLLiteralValue(v) || isSQLSignedNumber(v);
var isSQLIdentifier = (v) => (v == null ? void 0 : v.type) === "Identifier";
var getParamString = (param) => {
  switch (typeof param) {
    case "number":
      return `${param}`;
    case "boolean":
      return param ? "TRUE" : "FALSE";
    default:
      return `'${param}'`;
  }
};
var getFieldName = (f) => {
  const fieldName = typeof f === "string" ? f : f.value;
  if (fieldName.startsWith("`") && fieldName.endsWith("`")) {
    return fieldName.replaceAll(/(^`|`$)/g, "").replaceAll("``", "`");
  } else if (fieldName.startsWith('"') && fieldName.endsWith('"')) {
    return fieldName.replaceAll(/(^"|"$)/g, "").replaceAll('""', '"');
  } else if (fieldName.startsWith("[") && fieldName.endsWith("]")) {
    return fieldName.replaceAll(/(^\[|\]$)/g, "").replaceAll("]]", "]");
  }
  return fieldName;
};
var normalizeCombinator2 = (c) => c.replace("&&", "and").replace("||", "or").toLowerCase();
var normalizeOperator2 = (op, flip) => {
  if (flip) {
    if (op === "<")
      return ">";
    if (op === "<=")
      return ">=";
    if (op === ">")
      return "<";
    if (op === ">=")
      return "<=";
  }
  if (op === "<>")
    return "!=";
  return op;
};
var evalSQLLiteralValue = (valueObj) => {
  if (valueObj.type === "String") {
    const valueString = valueObj.value;
    if (valueString.startsWith(`'`) && valueString.endsWith(`'`) || valueString.startsWith(`"`) && valueString.endsWith(`"`)) {
      const innerString = valueString.substring(1, valueString.length - 1);
      return innerString.replaceAll(/''/gm, "'");
    }
    return valueString;
  } else if (valueObj.type === "Boolean") {
    return valueObj.value.toLowerCase() === "true";
  } else if (isSQLSignedNumber(valueObj)) {
    return parseFloat(`${valueObj.prefix}${valueObj.value.value}`);
  }
  return parseFloat(valueObj.value);
};
var generateFlatAndOrList2 = (expr) => {
  const combinator = normalizeCombinator2(expr.operator);
  if (expr.left.type === "AndExpression" || expr.left.type === "OrExpression" || expr.left.type === "XorExpression") {
    return [...generateFlatAndOrList2(expr.left), combinator, expr.right];
  }
  return [expr.left, combinator, expr.right];
};
var generateMixedAndXorOrList = (expr) => {
  const arr = generateFlatAndOrList2(expr);
  let currentLevel = 0;
  const orArray = { combinator: "or", expressions: [] };
  let xorArray = { combinator: "xor", expressions: [] };
  let andArray = { combinator: "and", expressions: [] };
  for (let i = 0; i < arr.length - 2; i += 2) {
    let levelDelta = 0;
    if (arr[i + 1] === "and") {
      levelDelta = 2 - currentLevel;
    } else if (arr[i + 1] === "xor") {
      levelDelta = 1 - currentLevel;
    } else if (arr[i + 1] === "or") {
      levelDelta = 0 - currentLevel;
    }
    if (levelDelta > 0) {
      for (let d = 0; d < levelDelta; d++) {
        currentLevel += 1;
        if (currentLevel === 1) {
          xorArray = { combinator: "xor", expressions: [] };
          if (levelDelta === 1) {
            xorArray.expressions.push(arr[i]);
            if (i >= arr.length - 3 || arr[i + 3] === "xor") {
              xorArray.expressions.push(arr[i + 2]);
            }
          }
        } else if (currentLevel === 2) {
          andArray = { combinator: "and", expressions: [] };
          andArray.expressions.push(arr[i], arr[i + 2]);
        }
      }
    } else if (levelDelta < 0) {
      for (let d = 0; d > levelDelta; d--) {
        currentLevel -= 1;
        if (currentLevel === 1) {
          xorArray.expressions.push(andArray);
          if (levelDelta === -1) {
            xorArray.expressions.push(arr[i + 2]);
          }
        } else if (currentLevel === 0) {
          orArray.expressions.push(xorArray);
          if (i >= arr.length - 3) {
            orArray.expressions.push(arr[i + 2]);
          }
        }
      }
    } else {
      if (currentLevel === 0) {
        if (i === 0 || i > 3 && arr[i - 3] !== "or") {
          orArray.expressions.push(arr[i]);
        }
        if (i >= arr.length - 3 || arr[i + 3] === "or") {
          orArray.expressions.push(arr[i + 2]);
        }
      } else if (currentLevel === 1) {
        xorArray.expressions.push(arr[i + 2]);
      } else if (currentLevel === 2) {
        andArray.expressions.push(arr[i + 2]);
      }
    }
  }
  if (currentLevel === 2) {
    xorArray.expressions.push(andArray);
    currentLevel -= 1;
  }
  if (currentLevel === 1) {
    orArray.expressions.push(xorArray);
    currentLevel -= 1;
  }
  if (orArray.expressions.length === 1 && "combinator" in orArray.expressions[0]) {
    if (orArray.expressions[0].expressions.length === 1 && "combinator" in orArray.expressions[0].expressions[0]) {
      return orArray.expressions[0].expressions[0];
    } else {
      return orArray.expressions[0];
    }
  }
  const returnArray = { combinator: "or", expressions: [] };
  for (const o of orArray.expressions) {
    if ("combinator" in o) {
      if ("combinator" in o.expressions[0] && o.expressions.length === 1) {
        returnArray.expressions.push(o.expressions[0]);
      } else {
        returnArray.expressions.push(o);
      }
    } else {
      returnArray.expressions.push(o);
    }
  }
  return returnArray;
};
function parseSQL(sql, options = {}) {
  const { params, paramPrefix, independentCombinators, fields, getValueSources } = options;
  let sqlString = /^[ \t\n\r\s]*SELECT\b/i.test(sql) ? sql : /^[ \t\n\r\s]*WHERE\b/i.test(sql) ? `SELECT * FROM t ${sql}` : `SELECT * FROM t WHERE ${sql}`;
  let ic = false;
  const fieldsFlat = getFieldsArray(fields);
  ic = !!independentCombinators;
  if (params) {
    if (Array.isArray(params)) {
      let i = 0;
      sqlString = sqlString.replace(/\?/g, () => {
        const paramString = getParamString(params[i]);
        i++;
        return paramString;
      });
    } else {
      const keys = Object.keys(params);
      const prefix = paramPrefix ?? ":";
      keys.forEach((p) => {
        sqlString = sqlString.replace(
          new RegExp(`\\${prefix}${p}\\b`, "ig"),
          getParamString(params[p])
        );
      });
    }
  }
  const fieldIsValid = (fieldName, operator, subordinateFieldName) => fieldIsValidUtil({
    fieldName,
    fieldsFlat,
    operator,
    subordinateFieldName,
    getValueSources
  });
  const processSQLExpression = (expr) => {
    if (expr.type === "NotExpression") {
      const val = expr.value.type === "SimpleExprParentheses" ? expr.value.value.value[0] : expr.value;
      const rule = processSQLExpression(val);
      if (rule) {
        if ("rules" in rule) {
          return { ...rule, not: true };
        }
        return {
          rules: [rule],
          not: true,
          ...!ic && { combinator: "and" }
        };
      }
    } else if (expr.type === "SimpleExprParentheses") {
      const ex = expr.value.value[0];
      if (ex.type === "AndExpression" || ex.type === "OrExpression" || ex.type === "XorExpression") {
        return processSQLExpression(ex);
      }
      const rule = processSQLExpression(ex);
      return rule ? { rules: [rule], ...ic ? {} : { combinator: "and" } } : null;
    } else if (expr.type === "AndExpression" || expr.type === "OrExpression" || expr.type === "XorExpression") {
      if (ic) {
        const andOrList = generateFlatAndOrList2(expr);
        const rules2 = andOrList.map((v) => {
          if (typeof v === "string") {
            return v;
          }
          return processSQLExpression(v);
        });
        if (rules2.includes(null)) {
          return null;
        }
        return {
          rules: rules2
        };
      }
      const andXorOrList = generateMixedAndXorOrList(expr);
      const { combinator } = andXorOrList;
      const rules = andXorOrList.expressions.map((obj) => {
        if ("combinator" in obj) {
          return {
            combinator: obj.combinator,
            rules: obj.expressions.map((o) => {
              if ("combinator" in o) {
                return {
                  combinator: o.combinator,
                  rules: o.expressions.map((oa) => processSQLExpression(oa)).filter(Boolean)
                };
              } else {
                return processSQLExpression(o);
              }
            }).filter(Boolean)
          };
        }
        return processSQLExpression(obj);
      }).filter(Boolean);
      if (rules.length > 0) {
        return { combinator, rules };
      }
    } else if (expr.type === "IsNullBooleanPrimary") {
      if (isSQLIdentifier(expr.value)) {
        const f = getFieldName(expr.value);
        const operator = expr.hasNot ? "notNull" : "null";
        if (fieldIsValid(f, operator)) {
          return {
            field: f,
            operator,
            value: null
          };
        }
      }
    } else if (expr.type === "ComparisonBooleanPrimary") {
      if (isSQLIdentifier(expr.left) && !isSQLIdentifier(expr.right) || !isSQLIdentifier(expr.left) && isSQLIdentifier(expr.right)) {
        const identifier = isSQLIdentifier(expr.left) ? expr.left.value : expr.right.value;
        const valueObj = [expr.left, expr.right].find((t) => !isSQLIdentifier(t));
        if (isSQLLiteralOrSignedNumberValue(valueObj)) {
          const f = getFieldName(identifier);
          const operator = normalizeOperator2(expr.operator, isSQLIdentifier(expr.right));
          if (fieldIsValid(f, operator)) {
            return {
              field: f,
              operator,
              value: evalSQLLiteralValue(valueObj)
            };
          }
        }
      } else if (isSQLIdentifier(expr.left) && isSQLIdentifier(expr.right)) {
        const f = getFieldName(expr.left);
        const sf = getFieldName(expr.right);
        const operator = normalizeOperator2(expr.operator);
        if (fieldIsValid(f, operator, sf)) {
          return {
            field: f,
            operator,
            value: sf,
            valueSource: "field"
          };
        }
      }
    } else if (expr.type === "InExpressionListPredicate") {
      if (isSQLIdentifier(expr.left)) {
        const f = getFieldName(expr.left);
        const valueArray = expr.right.value.filter(isSQLLiteralOrSignedNumberValue).map(evalSQLLiteralValue);
        const operator = expr.hasNot ? "notIn" : "in";
        const fieldArray = expr.right.value.filter(isSQLIdentifier).filter((sf) => fieldIsValid(f, operator, sf.value)).map(getFieldName);
        if (valueArray.length > 0) {
          const value = (options == null ? void 0 : options.listsAsArrays) ? valueArray : valueArray.join(", ");
          return { field: getFieldName(expr.left), operator, value };
        } else if (fieldArray.length > 0) {
          const value = (options == null ? void 0 : options.listsAsArrays) ? fieldArray : fieldArray.join(", ");
          return {
            field: getFieldName(expr.left),
            operator,
            value,
            valueSource: "field"
          };
        }
      }
    } else if (expr.type === "BetweenPredicate") {
      if (isSQLIdentifier(expr.left) && isSQLLiteralOrSignedNumberValue(expr.right.left) && isSQLLiteralOrSignedNumberValue(expr.right.right)) {
        const valueArray = [expr.right.left, expr.right.right].map(evalSQLLiteralValue);
        const value = (options == null ? void 0 : options.listsAsArrays) ? valueArray : valueArray.join(", ");
        const operator = expr.hasNot ? "notBetween" : "between";
        return { field: getFieldName(expr.left), operator, value };
      } else if (isSQLIdentifier(expr.left) && isSQLIdentifier(expr.right.left) && isSQLIdentifier(expr.right.right)) {
        const f = getFieldName(expr.left);
        const valueArray = [expr.right.left, expr.right.right].map(getFieldName);
        const operator = expr.hasNot ? "notBetween" : "between";
        if (valueArray.every((sf) => fieldIsValid(f, operator, sf))) {
          const value = (options == null ? void 0 : options.listsAsArrays) ? valueArray : valueArray.join(", ");
          return { field: f, operator, value, valueSource: "field" };
        }
      }
    } else if (expr.type === "LikePredicate") {
      if (isSQLIdentifier(expr.left) && expr.right.type === "String") {
        const valueWithWildcards = evalSQLLiteralValue(expr.right);
        const valueWithoutWildcards = valueWithWildcards.replace(/(^%)|(%$)/g, "");
        let operator = "=";
        if (/^%.*%$/.test(valueWithWildcards) || valueWithWildcards === "%") {
          operator = expr.hasNot ? "doesNotContain" : "contains";
        } else if (/%$/.test(valueWithWildcards)) {
          operator = expr.hasNot ? "doesNotBeginWith" : "beginsWith";
        } else if (/^%/.test(valueWithWildcards)) {
          operator = expr.hasNot ? "doesNotEndWith" : "endsWith";
        }
        const f = getFieldName(expr.left);
        if (fieldIsValid(f, operator)) {
          return { field: f, operator, value: valueWithoutWildcards };
        }
      } else if (isSQLIdentifier(expr.left) && (expr.right.type === "StartsWithExpr" || expr.right.type === "EndsWithExpr" || expr.right.type === "ContainsExpr")) {
        let subordinateFieldName = "";
        let operator = "=";
        if (isSQLIdentifier(expr.right.value)) {
          subordinateFieldName = getFieldName(expr.right.value);
        }
        if (expr.right.type === "EndsWithExpr") {
          operator = expr.hasNot ? "doesNotEndWith" : "endsWith";
        } else if (expr.right.type === "StartsWithExpr") {
          operator = expr.hasNot ? "doesNotBeginWith" : "beginsWith";
        } else if (expr.right.type === "ContainsExpr") {
          operator = expr.hasNot ? "doesNotContain" : "contains";
        }
        const baseFieldName = getFieldName(expr.left);
        if (operator !== "=" && fieldIsValid(baseFieldName, operator, subordinateFieldName)) {
          return {
            field: baseFieldName,
            operator,
            value: subordinateFieldName,
            valueSource: "field"
          };
        }
      } else if (isSQLIdentifier(expr.left) && isSQLIdentifier(expr.right)) {
        const baseFieldName = getFieldName(expr.left);
        const subordinateFieldName = getFieldName(expr.right);
        const operator = "=";
        if (fieldIsValid(baseFieldName, operator, subordinateFieldName)) {
          return {
            field: baseFieldName,
            operator,
            value: subordinateFieldName,
            valueSource: "field"
          };
        }
      }
    }
    return null;
  };
  const { where } = sqlParser.parse(sqlString).value;
  if (where) {
    const result = processSQLExpression(where);
    if (result) {
      if ("rules" in result) {
        return result;
      }
      return { rules: [result], ...ic ? {} : { combinator: "and" } };
    }
  }
  return { rules: [], ...ic ? {} : { combinator: "and" } };
}
var findPath = (path, query) => {
  let target = query;
  let level = 0;
  while (level < path.length && target && "rules" in target) {
    const t = target.rules[path[level]];
    if (typeof t !== "string") {
      target = t;
    } else {
      target = null;
    }
    level++;
  }
  return target;
};
var getParentPath = (path) => path.slice(0, path.length - 1);
var pathsAreEqual = (path1, path2) => path1.length === path2.length && path1.every((val, idx) => val === path2[idx]);
var isAncestor = (maybeAncestor, path) => maybeAncestor.length < path.length && RegExp(`^${maybeAncestor.join("-")}`).test(path.join("-"));
var getCommonAncestorPath = (path1, path2) => {
  const commonAncestorPath = [];
  const parentPath1 = getParentPath(path1);
  const parentPath2 = getParentPath(path2);
  let i = 0;
  while (i < parentPath1.length && i < parentPath2.length && parentPath1[i] === parentPath2[i]) {
    commonAncestorPath.push(parentPath2[i]);
    i++;
  }
  return commonAncestorPath;
};
var pathIsDisabled = (path, query) => {
  let disabled = !!query.disabled;
  let target = query;
  let level = 0;
  while (level < path.length && !disabled && "rules" in target) {
    const t = target.rules[path[level]];
    if (isPojo(t) && ("rules" in t || "field" in t)) {
      disabled = !!t.disabled;
      target = t;
    }
    level++;
  }
  return disabled;
};
var prepareRule = (rule, { idGenerator = generateID } = {}) => produce(rule, (draft) => {
  if (!draft.id) {
    draft.id = idGenerator();
  }
});
var prepareRuleGroup = (queryObject, { idGenerator = generateID } = {}) => produce(queryObject, (draft) => {
  if (!draft.id) {
    draft.id = idGenerator();
  }
  draft.rules = draft.rules.map(
    (r2) => typeof r2 === "string" ? r2 : "rules" in r2 ? prepareRuleGroup(r2, { idGenerator }) : prepareRule(r2, { idGenerator })
  );
});
var prepareRuleOrGroup = (rg, { idGenerator = generateID } = {}) => "rules" in rg ? prepareRuleGroup(rg, { idGenerator }) : prepareRule(rg, { idGenerator });
var regenerateID = (rule, { idGenerator = generateID } = {}) => JSON.parse(JSON.stringify({ ...rule, id: idGenerator() }));
var regenerateIDs = (ruleOrGroup, { idGenerator = generateID } = {}) => {
  if (!isPojo(ruleOrGroup))
    return ruleOrGroup;
  if (!("rules" in ruleOrGroup)) {
    return JSON.parse(JSON.stringify({ ...ruleOrGroup, id: idGenerator() }));
  }
  if ("combinator" in ruleOrGroup) {
    const rules2 = ruleOrGroup.rules.map(
      (r2) => isPojo(r2) && "rules" in r2 ? regenerateIDs(r2, { idGenerator }) : regenerateID(r2, { idGenerator })
    );
    return { ...ruleOrGroup, id: idGenerator(), rules: rules2 };
  }
  const rules = ruleOrGroup.rules.map(
    (r2) => typeof r2 === "string" ? r2 : isPojo(r2) && "rules" in r2 ? regenerateIDs(r2, { idGenerator }) : regenerateID(r2, { idGenerator })
  );
  return { ...ruleOrGroup, id: idGenerator(), rules };
};
var add = (query, ruleOrGroup, parentPath, {
  combinators = defaultCombinators,
  combinatorPreceding,
  idGenerator = generateID
} = {}) => produce(query, (draft) => {
  const parent = findPath(parentPath, draft);
  if (!parent || !("rules" in parent))
    return;
  if (!("combinator" in parent) && parent.rules.length > 0) {
    const prevCombinator = parent.rules[parent.rules.length - 2];
    parent.rules.push(
      // @ts-expect-error This is technically a type violation until the next push
      // to the rules array, but that happens immediately and unconditionally so
      // there's no significant risk.
      combinatorPreceding ?? (typeof prevCombinator === "string" ? prevCombinator : getFirstOption(combinators))
    );
  }
  parent.rules.push(prepareRuleOrGroup(ruleOrGroup, { idGenerator }));
});
var update = (query, prop, value, path, {
  resetOnFieldChange = true,
  resetOnOperatorChange = false,
  getRuleDefaultOperator = () => "=",
  getValueSources = () => ["value"],
  getRuleDefaultValue = () => ""
} = {}) => produce(query, (draft) => {
  if (prop === "combinator" && !("combinator" in draft)) {
    const parentRules = findPath(getParentPath(path), draft).rules;
    if (path[path.length - 1] % 2 === 1) {
      parentRules[path[path.length - 1]] = value;
    }
    return;
  }
  const ruleOrGroup = findPath(path, draft);
  if (!ruleOrGroup)
    return;
  const isGroup = "rules" in ruleOrGroup;
  if (ruleOrGroup[prop] === value)
    return;
  if (prop !== "valueSource") {
    ruleOrGroup[prop] = value;
  }
  if (isGroup)
    return;
  let resetValueSource = false;
  let resetValue = false;
  if (resetOnFieldChange && prop === "field") {
    ruleOrGroup.operator = getRuleDefaultOperator(value);
    resetValueSource = true;
    resetValue = true;
  }
  if (resetOnOperatorChange && prop === "operator") {
    resetValueSource = true;
    resetValue = true;
  }
  const defaultValueSource = getValueSources(ruleOrGroup.field, ruleOrGroup.operator)[0];
  if (resetValueSource && ruleOrGroup.valueSource && defaultValueSource !== ruleOrGroup.valueSource || prop === "valueSource" && value !== ruleOrGroup.valueSource) {
    resetValue = !!ruleOrGroup.valueSource || !ruleOrGroup.valueSource && value !== defaultValueSource;
    ruleOrGroup.valueSource = resetValueSource ? defaultValueSource : value;
  }
  if (resetValue) {
    ruleOrGroup.value = getRuleDefaultValue(ruleOrGroup);
  }
});
var remove = (query, path) => {
  if (
    // Can't remove the root group
    path.length === 0 || // Can't independently remove independent combinators
    !("combinator" in query) && !findPath(path, query)
  ) {
    return query;
  }
  return produce(query, (draft) => {
    const index = path[path.length - 1];
    const parent = findPath(getParentPath(path), draft);
    if (parent && "rules" in parent) {
      if (!("combinator" in parent) && parent.rules.length > 1) {
        const idxStartDelete = index === 0 ? 0 : index - 1;
        parent.rules.splice(idxStartDelete, 2);
      } else {
        parent.rules.splice(index, 1);
      }
    }
  });
};
var move = (query, oldPath, newPath, { clone = false, combinators = defaultCombinators, idGenerator = generateID } = {}) => {
  if (pathsAreEqual(oldPath, newPath) || !findPath(getParentPath(newPath), query)) {
    return query;
  }
  const ruleOrGroupOriginal = findPath(oldPath, query);
  if (!ruleOrGroupOriginal) {
    return query;
  }
  const ruleOrGroup = clone ? "rules" in ruleOrGroupOriginal ? regenerateIDs(ruleOrGroupOriginal, { idGenerator }) : regenerateID(ruleOrGroupOriginal, { idGenerator }) : ruleOrGroupOriginal;
  return produce(query, (draft) => {
    const independentCombinators = !("combinator" in draft);
    const parentOfRuleToRemove = findPath(getParentPath(oldPath), draft);
    const ruleToRemoveIndex = oldPath[oldPath.length - 1];
    const oldPrevCombinator = independentCombinators && ruleToRemoveIndex > 0 ? parentOfRuleToRemove.rules[ruleToRemoveIndex - 1] : null;
    const oldNextCombinator = independentCombinators && ruleToRemoveIndex < parentOfRuleToRemove.rules.length - 1 ? parentOfRuleToRemove.rules[ruleToRemoveIndex + 1] : null;
    if (!clone) {
      const idxStartDelete = independentCombinators ? Math.max(0, ruleToRemoveIndex - 1) : ruleToRemoveIndex;
      const deleteLength = independentCombinators ? 2 : 1;
      parentOfRuleToRemove.rules.splice(idxStartDelete, deleteLength);
    }
    const newNewPath = [...newPath];
    const commonAncestorPath = getCommonAncestorPath(oldPath, newPath);
    if (!clone && oldPath.length === commonAncestorPath.length + 1 && newPath[commonAncestorPath.length] > oldPath[commonAncestorPath.length]) {
      newNewPath[commonAncestorPath.length] -= independentCombinators ? 2 : 1;
    }
    const newNewParentPath = getParentPath(newNewPath);
    const parentToInsertInto = findPath(newNewParentPath, draft);
    const newIndex = newNewPath[newNewPath.length - 1];
    const insertRuleOrGroup = (...args) => parentToInsertInto.rules.splice(newIndex, 0, ...args);
    if (parentToInsertInto.rules.length === 0 || !independentCombinators) {
      insertRuleOrGroup(ruleOrGroup);
    } else {
      if (newIndex === 0) {
        if (ruleToRemoveIndex === 0 && oldNextCombinator) {
          insertRuleOrGroup(ruleOrGroup, oldNextCombinator);
        } else {
          const newNextCombinator = parentToInsertInto.rules[1] || oldPrevCombinator || getFirstOption(combinators);
          insertRuleOrGroup(ruleOrGroup, newNextCombinator);
        }
      } else {
        if (oldPrevCombinator) {
          insertRuleOrGroup(oldPrevCombinator, ruleOrGroup);
        } else {
          const newPrevCombinator = parentToInsertInto.rules[newIndex - 2] || oldNextCombinator || getFirstOption(combinators);
          insertRuleOrGroup(newPrevCombinator, ruleOrGroup);
        }
      }
    }
  });
};
var toOptions = (arr) => isOptionGroupArray(arr) ? arr.map((og) => React6.createElement("optgroup", { key: og.label, label: og.label }, og.options.map((opt) => React6.createElement("option", { key: opt.name, value: opt.name }, opt.label)))) : Array.isArray(arr) ? arr.map((opt) => React6.createElement("option", { key: opt.name, value: opt.name }, opt.label)) : null;
var remapProperties = (obj, propertyMap, deleteRemappedProperties) => produce(obj, (draft) => {
  for (const [k, v] of Object.entries(propertyMap)) {
    if (v === false) {
      delete draft[k];
    } else if (!!v && k !== v && Object.hasOwn(draft, k)) {
      draft[v] = draft[k];
      if (deleteRemappedProperties) {
        delete draft[k];
      }
    }
  }
});
function transformQuery(query, options = {}) {
  const {
    ruleProcessor = (r2) => r2,
    ruleGroupProcessor = (rg) => rg,
    propertyMap = {},
    combinatorMap = {},
    operatorMap = {},
    omitPath = false,
    deleteRemappedProperties = true
  } = options;
  const processGroup = (rg) => ({
    ...ruleGroupProcessor(
      remapProperties(
        {
          ...rg,
          ...isRuleGroupType(rg) ? { combinator: combinatorMap[rg.combinator] ?? rg.combinator } : {}
        },
        propertyMap,
        deleteRemappedProperties
      )
    ),
    ...propertyMap["rules"] === false ? null : {
      [propertyMap["rules"] ?? "rules"]: rg.rules.map((r2, idx) => {
        const pathObject = omitPath ? null : { path: [...rg.path, idx] };
        if (typeof r2 === "string") {
          return combinatorMap[r2] ?? r2;
        } else if (isRuleGroup(r2)) {
          return processGroup({ ...r2, ...pathObject });
        }
        return ruleProcessor(
          remapProperties(
            {
              ...{ ...r2, ...pathObject },
              ..."operator" in r2 ? { operator: operatorMap[r2.operator] ?? r2.operator } : {}
            },
            propertyMap,
            deleteRemappedProperties
          )
        );
      })
    }
  });
  return processGroup({ ...query, ...omitPath ? null : { path: [] } });
}
var noop = () => {
};
var useQueryBuilder = (props) => {
  const {
    defaultQuery,
    query: queryProp,
    fields: fieldsPropOriginal,
    operators = defaultOperators,
    combinators = defaultCombinators,
    translations: translationsProp = defaultTranslations,
    enableMountQueryChange: enableMountQueryChangeProp = true,
    controlClassnames: controlClassnamesProp,
    controlElements: controlElementsProp,
    getDefaultField,
    getDefaultOperator,
    getDefaultValue,
    getOperators,
    getValueEditorType,
    getValueEditorSeparator = () => null,
    getValueSources,
    getInputType,
    getValues,
    getRuleClassname = () => "",
    getRuleGroupClassname = () => "",
    onAddRule = (r2) => r2,
    onAddGroup = (rg) => rg,
    onRemove = () => true,
    onQueryChange = noop,
    showCombinatorsBetweenRules = false,
    showNotToggle = false,
    showCloneButtons = false,
    showLockButtons = false,
    resetOnFieldChange = true,
    resetOnOperatorChange = false,
    autoSelectField = true,
    autoSelectOperator = true,
    addRuleToNewGroups = false,
    enableDragAndDrop: enableDragAndDropProp,
    independentCombinators,
    listsAsArrays = false,
    parseNumbers = false,
    disabled = false,
    validator,
    debugMode: debugModeProp = false,
    onLog = console.log,
    idGenerator = generateID
  } = props;
  const rqbContext = useMergedContext({
    controlClassnames: controlClassnamesProp,
    controlElements: controlElementsProp,
    debugMode: debugModeProp,
    enableDragAndDrop: enableDragAndDropProp,
    enableMountQueryChange: enableMountQueryChangeProp,
    translations: translationsProp
  });
  const {
    controlClassnames,
    controlElements,
    debugMode,
    enableDragAndDrop,
    enableMountQueryChange,
    translations
  } = rqbContext;
  const defaultField = (0, import_react2.useMemo)(
    () => ({
      id: translations.fields.placeholderName,
      name: translations.fields.placeholderName,
      label: translations.fields.placeholderLabel
    }),
    [translations.fields.placeholderLabel, translations.fields.placeholderName]
  );
  const fieldsProp = (0, import_react2.useMemo)(
    () => fieldsPropOriginal ?? [defaultField],
    [defaultField, fieldsPropOriginal]
  );
  const fields = (0, import_react2.useMemo)(() => {
    const f = Array.isArray(fieldsProp) ? fieldsProp : objectKeys(fieldsProp).map((fld) => ({ ...fieldsProp[fld], name: fld })).sort((a, b) => a.label.localeCompare(b.label));
    if (isOptionGroupArray(f)) {
      if (autoSelectField) {
        return uniqOptGroups(f);
      } else {
        return uniqOptGroups([
          {
            label: translations.fields.placeholderGroupLabel,
            options: [defaultField]
          },
          ...f
        ]);
      }
    } else {
      if (autoSelectField) {
        return uniqByName(f);
      } else {
        return uniqByName([defaultField, ...f]);
      }
    }
  }, [autoSelectField, defaultField, fieldsProp, translations.fields.placeholderGroupLabel]);
  const fieldMap = (0, import_react2.useMemo)(() => {
    if (!Array.isArray(fieldsProp)) {
      const fp = {};
      objectKeys(fieldsProp).forEach((f) => fp[f] = { ...fieldsProp[f], name: f });
      if (autoSelectField) {
        return fp;
      } else {
        return { ...fp, [translations.fields.placeholderName]: defaultField };
      }
    }
    const fm = {};
    if (isOptionGroupArray(fields)) {
      fields.forEach((f) => f.options.forEach((opt) => fm[opt.name] = opt));
    } else {
      fields.forEach((f) => fm[f.name] = f);
    }
    return fm;
  }, [autoSelectField, defaultField, fields, fieldsProp, translations.fields.placeholderName]);
  const defaultOperator = (0, import_react2.useMemo)(
    () => ({
      id: translations.operators.placeholderName,
      name: translations.operators.placeholderName,
      label: translations.operators.placeholderLabel
    }),
    [translations.operators.placeholderLabel, translations.operators.placeholderName]
  );
  const getOperatorsMain = (0, import_react2.useCallback)(
    (field) => {
      const fieldData = fieldMap[field];
      let opsFinal = operators;
      if (fieldData == null ? void 0 : fieldData.operators) {
        opsFinal = fieldData.operators;
      } else if (getOperators) {
        const ops = getOperators(field);
        if (ops) {
          opsFinal = ops;
        }
      }
      if (!autoSelectOperator) {
        if (isOptionGroupArray(opsFinal)) {
          opsFinal = [
            {
              label: translations.operators.placeholderGroupLabel,
              options: [defaultOperator]
            },
            ...opsFinal
          ];
        } else {
          opsFinal = [defaultOperator, ...opsFinal];
        }
      }
      return isOptionGroupArray(opsFinal) ? uniqOptGroups(opsFinal) : uniqByName(opsFinal);
    },
    [
      autoSelectOperator,
      defaultOperator,
      fieldMap,
      getOperators,
      operators,
      translations.operators.placeholderGroupLabel
    ]
  );
  const getRuleDefaultOperator = (0, import_react2.useCallback)(
    (field) => {
      const fieldData = fieldMap[field];
      if (fieldData == null ? void 0 : fieldData.defaultOperator) {
        return fieldData.defaultOperator;
      }
      if (getDefaultOperator) {
        if (typeof getDefaultOperator === "function") {
          return getDefaultOperator(field);
        } else {
          return getDefaultOperator;
        }
      }
      const ops = getOperatorsMain(field) ?? /* istanbul ignore next */
      [];
      return ops.length ? getFirstOption(ops) ?? /* istanbul ignore next */
      "" : (
        /* istanbul ignore next */
        ""
      );
    },
    [fieldMap, getDefaultOperator, getOperatorsMain]
  );
  const getValueEditorTypeMain = (0, import_react2.useCallback)(
    (field, operator) => {
      if (getValueEditorType) {
        const vet = getValueEditorType(field, operator);
        if (vet)
          return vet;
      }
      return "text";
    },
    [getValueEditorType]
  );
  const getValueSourcesMain = (0, import_react2.useCallback)(
    (field, operator) => getValueSourcesUtil(fieldMap[field], operator, getValueSources),
    [fieldMap, getValueSources]
  );
  const getValuesMain = (0, import_react2.useCallback)(
    (field, operator) => {
      const fieldData = fieldMap[field];
      if (fieldData == null ? void 0 : fieldData.values) {
        return fieldData.values;
      }
      if (getValues) {
        const vals = getValues(field, operator);
        if (vals)
          return vals;
      }
      return [];
    },
    [fieldMap, getValues]
  );
  const getRuleDefaultValue = (0, import_react2.useCallback)(
    (rule) => {
      const fieldData = fieldMap[rule.field];
      if ((fieldData == null ? void 0 : fieldData.defaultValue) !== void 0 && fieldData.defaultValue !== null) {
        return fieldData.defaultValue;
      } else if (getDefaultValue) {
        return getDefaultValue(rule);
      }
      let value = "";
      const values = getValuesMain(rule.field, rule.operator);
      const getFirstOptionsFrom = (opts) => {
        const firstOption = getFirstOption(opts);
        if (rule.operator === "between" || rule.operator === "notBetween") {
          const valueAsArray = [firstOption, firstOption];
          return listsAsArrays ? valueAsArray : joinWith(
            valueAsArray.map((v) => v ?? /* istanbul ignore next */
            ""),
            ","
          );
        } else {
          return firstOption;
        }
      };
      if (rule.valueSource === "field") {
        const filteredFields = filterFieldsByComparator(fieldData, fields, rule.operator);
        if (filteredFields.length > 0) {
          value = getFirstOptionsFrom(filteredFields);
        } else {
          value = "";
        }
      } else if (values.length) {
        value = getFirstOptionsFrom(values);
      } else {
        const editorType = getValueEditorTypeMain(rule.field, rule.operator);
        if (editorType === "checkbox") {
          value = false;
        }
      }
      return value;
    },
    [fieldMap, fields, getDefaultValue, getValueEditorTypeMain, getValuesMain, listsAsArrays]
  );
  const getInputTypeMain = (0, import_react2.useCallback)(
    (field, operator) => {
      if (getInputType) {
        const inputType = getInputType(field, operator);
        if (inputType)
          return inputType;
      }
      return "text";
    },
    [getInputType]
  );
  const createRule = (0, import_react2.useCallback)(() => {
    let field = "";
    if ((fields == null ? void 0 : fields.length) > 0 && fields[0]) {
      field = getFirstOption(fields) ?? /* istanbul ignore next */
      "";
    }
    if (getDefaultField) {
      if (typeof getDefaultField === "function") {
        field = getDefaultField(fields);
      } else {
        field = getDefaultField;
      }
    }
    const operator = getRuleDefaultOperator(field);
    const valueSource = getValueSourcesMain(field, operator)[0] ?? "value";
    const newRule = {
      id: idGenerator(),
      field,
      operator,
      valueSource,
      value: ""
    };
    const value = getRuleDefaultValue(newRule);
    return { ...newRule, value };
  }, [
    fields,
    getDefaultField,
    getRuleDefaultOperator,
    getRuleDefaultValue,
    getValueSourcesMain,
    idGenerator
  ]);
  const createRuleGroup = (0, import_react2.useCallback)(() => {
    if (independentCombinators) {
      return {
        id: idGenerator(),
        rules: addRuleToNewGroups ? [createRule()] : [],
        not: false
      };
    }
    return {
      id: idGenerator(),
      rules: addRuleToNewGroups ? [createRule()] : [],
      combinator: getFirstOption(combinators) ?? /* istanbul ignore next */
      "",
      not: false
    };
  }, [addRuleToNewGroups, combinators, createRule, idGenerator, independentCombinators]);
  const isFirstRender = (0, import_react2.useRef)(true);
  const [queryState, setQueryState] = (0, import_react2.useState)(
    defaultQuery ? prepareRuleGroup(defaultQuery, { idGenerator }) : createRuleGroup()
  );
  const query = queryProp ? isFirstRender.current ? prepareRuleGroup(queryProp, { idGenerator }) : queryProp : queryState;
  useControlledOrUncontrolled({
    defaultQuery,
    queryProp,
    isFirstRender: isFirstRender.current
  });
  isFirstRender.current = false;
  (0, import_react2.useEffect)(() => {
    if (enableMountQueryChange) {
      onQueryChange(query);
    }
  }, []);
  const uncontrolled = !queryProp;
  const dispatch = (0, import_react2.useCallback)(
    (newQuery) => {
      if (uncontrolled) {
        setQueryState(newQuery);
      }
      onQueryChange(newQuery);
    },
    [onQueryChange, uncontrolled]
  );
  const queryDisabled = (0, import_react2.useMemo)(
    () => disabled === true || Array.isArray(disabled) && disabled.some((p) => p.length === 0),
    [disabled]
  );
  const disabledPaths = (0, import_react2.useMemo)(() => Array.isArray(disabled) && disabled || [], [disabled]);
  const onRuleAdd = (rule, parentPath, context) => {
    if (pathIsDisabled(parentPath, query) || queryDisabled) {
      if (debugMode) {
        onLog({ type: LogType.parentPathDisabled, rule, parentPath, query });
      }
      return;
    }
    const newRule = onAddRule(rule, parentPath, query, context);
    if (!newRule) {
      if (debugMode) {
        onLog({ type: LogType.onAddRuleFalse, rule, parentPath, query });
      }
      return;
    }
    const newQuery = add(query, newRule, parentPath, {
      combinators,
      combinatorPreceding: newRule.combinatorPreceding ?? void 0
    });
    if (debugMode) {
      onLog({ type: LogType.add, query, newQuery, newRule, parentPath });
    }
    dispatch(newQuery);
  };
  const onGroupAdd = (ruleGroup, parentPath, context) => {
    if (pathIsDisabled(parentPath, query) || queryDisabled) {
      if (debugMode) {
        onLog({
          type: LogType.parentPathDisabled,
          ruleGroup,
          parentPath,
          query
        });
      }
      return;
    }
    const newGroup = onAddGroup(ruleGroup, parentPath, query, context);
    if (!newGroup) {
      if (debugMode) {
        onLog({ type: LogType.onAddGroupFalse, ruleGroup, parentPath, query });
      }
      return;
    }
    const newQuery = add(query, newGroup, parentPath, {
      combinators,
      combinatorPreceding: newGroup.combinatorPreceding ?? void 0
    });
    if (debugMode) {
      onLog({ type: LogType.add, query, newQuery, newGroup, parentPath });
    }
    dispatch(newQuery);
  };
  const onPropChange = (prop, value, path) => {
    if (pathIsDisabled(path, query) && prop !== "disabled" || queryDisabled) {
      if (debugMode) {
        onLog({ type: LogType.pathDisabled, path, prop, value, query });
      }
      return;
    }
    const newQuery = update(query, prop, value, path, {
      resetOnFieldChange,
      resetOnOperatorChange,
      getRuleDefaultOperator,
      getValueSources: getValueSourcesMain,
      getRuleDefaultValue
    });
    if (debugMode) {
      onLog({ type: LogType.update, query, newQuery, prop, value, path });
    }
    dispatch(newQuery);
  };
  const onRuleOrGroupRemove = (path, context) => {
    if (pathIsDisabled(path, query) || queryDisabled) {
      if (debugMode) {
        onLog({ type: LogType.pathDisabled, path, query });
      }
      return;
    }
    const ruleOrGroup = findPath(path, query);
    if (ruleOrGroup) {
      if (onRemove(ruleOrGroup, path, query, context)) {
        const newQuery = remove(query, path);
        if (debugMode) {
          onLog({ type: LogType.remove, query, newQuery, path, ruleOrGroup });
        }
        dispatch(newQuery);
      } else {
        if (debugMode) {
          onLog({ type: LogType.onRemoveFalse, ruleOrGroup, path, query });
        }
      }
    }
  };
  const moveRule = (oldPath, newPath, clone) => {
    if (pathIsDisabled(oldPath, query) || queryDisabled) {
      if (debugMode) {
        onLog({ type: LogType.pathDisabled, oldPath, newPath, query });
      }
      return;
    }
    const newQuery = move(query, oldPath, newPath, { clone, combinators });
    if (debugMode) {
      onLog({ type: LogType.move, query, newQuery, oldPath, newPath, clone });
    }
    dispatch(newQuery);
  };
  const { validationResult, validationMap } = (0, import_react2.useMemo)(() => {
    const validationResult2 = typeof validator === "function" ? validator(query) : {};
    const validationMap2 = typeof validationResult2 === "object" ? validationResult2 : {};
    return { validationResult: validationResult2, validationMap: validationMap2 };
  }, [query, validator]);
  const schema = (0, import_react2.useMemo)(
    () => ({
      fields,
      fieldMap,
      combinators,
      classNames: controlClassnames,
      createRule,
      createRuleGroup,
      controls: controlElements,
      getOperators: getOperatorsMain,
      getValueEditorType: getValueEditorTypeMain,
      getValueSources: getValueSourcesMain,
      getInputType: getInputTypeMain,
      getValues: getValuesMain,
      getValueEditorSeparator,
      getRuleClassname,
      getRuleGroupClassname,
      showCombinatorsBetweenRules,
      showNotToggle,
      showCloneButtons,
      showLockButtons,
      autoSelectField,
      autoSelectOperator,
      addRuleToNewGroups,
      enableDragAndDrop,
      independentCombinators: !!independentCombinators,
      listsAsArrays,
      parseNumbers,
      validationMap,
      disabledPaths
    }),
    [
      addRuleToNewGroups,
      autoSelectField,
      autoSelectOperator,
      combinators,
      controlClassnames,
      controlElements,
      createRule,
      createRuleGroup,
      disabledPaths,
      enableDragAndDrop,
      fieldMap,
      fields,
      getInputTypeMain,
      getOperatorsMain,
      getRuleClassname,
      getRuleGroupClassname,
      getValueEditorTypeMain,
      getValuesMain,
      getValueSourcesMain,
      getValueEditorSeparator,
      independentCombinators,
      listsAsArrays,
      parseNumbers,
      showCloneButtons,
      showCombinatorsBetweenRules,
      showLockButtons,
      showNotToggle,
      validationMap
    ]
  );
  const actions = {
    onRuleAdd,
    onGroupAdd,
    onRuleRemove: onRuleOrGroupRemove,
    onGroupRemove: onRuleOrGroupRemove,
    onPropChange,
    moveRule
  };
  const wrapperClassName = (0, import_react2.useMemo)(
    () => clsx(standardClassnames.queryBuilder, clsx(controlClassnames.queryBuilder), {
      [standardClassnames.disabled]: query.disabled || queryDisabled,
      [standardClassnames.valid]: typeof validationResult === "boolean" && validationResult,
      [standardClassnames.invalid]: typeof validationResult === "boolean" && !validationResult
    }),
    [controlClassnames.queryBuilder, queryDisabled, query.disabled, validationResult]
  );
  return {
    actions,
    query,
    queryDisabled,
    rqbContext,
    schema,
    translations,
    wrapperClassName
  };
};
var useRule = (props) => {
  const {
    id,
    path,
    rule: ruleProp,
    schema,
    actions: { moveRule, onPropChange, onRuleRemove },
    disabled: disabledProp,
    parentDisabled,
    field: fieldProp,
    operator: operatorProp,
    value: valueProp,
    valueSource: valueSourceProp,
    dragMonitorId = "",
    dropMonitorId = "",
    dndRef = null,
    dragRef = null,
    isDragging = false,
    isOver = false
  } = props;
  const {
    classNames: classNamesProp,
    fields,
    fieldMap,
    getInputType,
    getOperators,
    getValueEditorType,
    getValueEditorSeparator,
    getValueSources,
    getValues,
    validationMap,
    enableDragAndDrop,
    getRuleClassname
  } = schema;
  useDeprecatedProps("rule", !!ruleProp);
  useReactDndWarning(enableDragAndDrop, !!(dragMonitorId || dropMonitorId || dndRef || dragRef));
  const disabled = !!parentDisabled || !!disabledProp;
  const rule = ruleProp ? ruleProp : {
    id,
    field: fieldProp ?? /* istanbul ignore next */
    "",
    operator: operatorProp ?? /* istanbul ignore next */
    "",
    value: valueProp,
    valueSource: valueSourceProp
  };
  const classNames = (0, import_react10.useMemo)(
    () => ({
      dragHandle: clsx(standardClassnames.dragHandle, classNamesProp.dragHandle),
      fields: clsx(standardClassnames.fields, classNamesProp.fields),
      operators: clsx(standardClassnames.operators, classNamesProp.operators),
      valueSource: clsx(standardClassnames.valueSource, classNamesProp.valueSource),
      value: clsx(standardClassnames.value, classNamesProp.value),
      cloneRule: clsx(standardClassnames.cloneRule, classNamesProp.cloneRule),
      lockRule: clsx(standardClassnames.lockRule, classNamesProp.lockRule),
      removeRule: clsx(standardClassnames.removeRule, classNamesProp.removeRule)
    }),
    [
      classNamesProp.dragHandle,
      classNamesProp.fields,
      classNamesProp.operators,
      classNamesProp.valueSource,
      classNamesProp.value,
      classNamesProp.cloneRule,
      classNamesProp.lockRule,
      classNamesProp.removeRule
    ]
  );
  const generateOnChangeHandler = (prop) => (value, _context) => {
    if (!disabled) {
      onPropChange(prop, value, path);
    }
  };
  const cloneRule = (_event, _context) => {
    if (!disabled) {
      const newPath = [...getParentPath(path), path[path.length - 1] + 1];
      moveRule(path, newPath, true);
    }
  };
  const toggleLockRule = (_event, _context) => {
    onPropChange("disabled", !disabled, path);
  };
  const removeRule = (_event, _context) => {
    if (!disabled) {
      onRuleRemove(path);
    }
  };
  const fieldData = (fieldMap == null ? void 0 : fieldMap[rule.field]) ?? { name: rule.field, label: rule.field };
  const inputType = fieldData.inputType ?? getInputType(rule.field, rule.operator);
  const operators = getOperators(rule.field);
  const operatorObject = getOption(operators, rule.operator);
  const arity = operatorObject == null ? void 0 : operatorObject.arity;
  const hideValueControls = typeof arity === "string" && arity === "unary" || typeof arity === "number" && arity < 2;
  const valueSources = typeof fieldData.valueSources === "function" ? fieldData.valueSources(rule.operator) : fieldData.valueSources ?? getValueSources(rule.field, rule.operator);
  const valueEditorType = rule.valueSource === "field" ? "select" : (typeof fieldData.valueEditorType === "function" ? fieldData.valueEditorType(rule.operator) : fieldData.valueEditorType) ?? getValueEditorType(rule.field, rule.operator);
  const valueEditorSeparator = getValueEditorSeparator(rule.field, rule.operator);
  const values = rule.valueSource === "field" ? filterFieldsByComparator(fieldData, fields, rule.operator) : fieldData.values ?? getValues(rule.field, rule.operator);
  const valueSourceOptions = valueSources.map((vs) => ({ name: vs, label: vs }));
  const validationResult = validationMap[id ?? /* istanbul ignore next */
  ""] ?? (typeof fieldData.validator === "function" ? fieldData.validator(rule) : null);
  const validationClassName = getValidationClassNames(validationResult);
  const fieldBasedClassName = (0, import_react10.useMemo)(() => (fieldData == null ? void 0 : fieldData.className) ?? "", [fieldData == null ? void 0 : fieldData.className]);
  const operatorBasedClassName = (0, import_react10.useMemo)(
    () => (operatorObject == null ? void 0 : operatorObject.className) ?? "",
    [operatorObject == null ? void 0 : operatorObject.className]
  );
  const outerClassName = clsx(
    getRuleClassname(rule),
    fieldBasedClassName,
    operatorBasedClassName,
    standardClassnames.rule,
    classNamesProp.rule,
    {
      [standardClassnames.disabled]: disabled,
      [standardClassnames.dndDragging]: isDragging,
      [standardClassnames.dndOver]: isOver
    },
    validationClassName
  );
  return {
    classNames,
    cloneRule,
    disabled,
    dndRef,
    dragMonitorId,
    dragRef,
    dropMonitorId,
    fieldData,
    generateOnChangeHandler,
    hideValueControls,
    inputType,
    operators,
    outerClassName,
    removeRule,
    rule,
    toggleLockRule,
    validationResult,
    valueEditorSeparator,
    valueEditorType,
    values,
    valueSourceOptions,
    valueSources
  };
};
var useRuleGroup = (props) => {
  const {
    id,
    path,
    ruleGroup: ruleGroupProp,
    schema,
    actions: { onGroupAdd, onGroupRemove, onPropChange, onRuleAdd, moveRule },
    disabled: disabledProp,
    parentDisabled,
    combinator: combinatorProp,
    rules: rulesProp,
    not: notProp,
    // Drag-and-drop
    dragMonitorId = "",
    dropMonitorId = "",
    previewRef = null,
    dragRef = null,
    dropRef = null,
    isDragging = false,
    isOver = false
  } = props;
  const {
    classNames: classNamesProp,
    combinators,
    createRule,
    createRuleGroup,
    independentCombinators,
    validationMap,
    enableDragAndDrop,
    getRuleGroupClassname
  } = schema;
  useDeprecatedProps("ruleGroup", !!ruleGroupProp);
  useReactDndWarning(
    enableDragAndDrop,
    !!(dragMonitorId || dropMonitorId || previewRef || dragRef || dropRef)
  );
  const disabled = !!parentDisabled || !!disabledProp;
  const ruleGroup = ruleGroupProp ? { ...ruleGroupProp } : { rules: rulesProp, not: notProp };
  const combinator = ruleGroupProp && "combinator" in ruleGroupProp ? ruleGroupProp.combinator : !ruleGroupProp ? combinatorProp ?? getFirstOption(combinators) : getFirstOption(combinators);
  if (!independentCombinators) {
    ruleGroup.combinator = combinator;
  }
  const classNames = (0, import_react11.useMemo)(
    () => ({
      header: clsx(standardClassnames.header, classNamesProp.header, {
        [standardClassnames.dndOver]: isOver
      }),
      dragHandle: clsx(standardClassnames.dragHandle, classNamesProp.dragHandle),
      combinators: clsx(standardClassnames.combinators, classNamesProp.combinators),
      notToggle: clsx(standardClassnames.notToggle, classNamesProp.notToggle),
      addRule: clsx(standardClassnames.addRule, classNamesProp.addRule),
      addGroup: clsx(standardClassnames.addGroup, classNamesProp.addGroup),
      cloneGroup: clsx(standardClassnames.cloneGroup, classNamesProp.cloneGroup),
      lockGroup: clsx(standardClassnames.lockGroup, classNamesProp.lockGroup),
      removeGroup: clsx(standardClassnames.removeGroup, classNamesProp.removeGroup),
      body: clsx(standardClassnames.body, classNamesProp.body)
    }),
    [
      classNamesProp.addGroup,
      classNamesProp.addRule,
      classNamesProp.body,
      classNamesProp.cloneGroup,
      classNamesProp.combinators,
      classNamesProp.dragHandle,
      classNamesProp.header,
      classNamesProp.lockGroup,
      classNamesProp.notToggle,
      classNamesProp.removeGroup,
      isOver
    ]
  );
  const onCombinatorChange = (value, _context) => {
    if (!disabled) {
      onPropChange("combinator", value, path);
    }
  };
  const onIndependentCombinatorChange = (value, index, _context) => {
    if (!disabled) {
      onPropChange("combinator", value, path.concat([index]));
    }
  };
  const onNotToggleChange = (checked, _context) => {
    if (!disabled) {
      onPropChange("not", checked, path);
    }
  };
  const addRule = (_event, context) => {
    if (!disabled) {
      const newRule = createRule();
      onRuleAdd(newRule, path, context);
    }
  };
  const addGroup = (_event, context) => {
    if (!disabled) {
      const newGroup = createRuleGroup();
      onGroupAdd(newGroup, path, context);
    }
  };
  const cloneGroup = (_event, _context) => {
    if (!disabled) {
      const newPath = [...getParentPath(path), path[path.length - 1] + 1];
      moveRule(path, newPath, true);
    }
  };
  const toggleLockGroup = (_event, _context) => {
    onPropChange("disabled", !disabled, path);
  };
  const removeGroup = (_event, _context) => {
    if (!disabled) {
      onGroupRemove(path);
    }
  };
  const validationResult = validationMap[id ?? /* istanbul ignore next */
  ""];
  const validationClassName = getValidationClassNames(validationResult);
  const combinatorBasedClassName = (0, import_react11.useMemo)(
    () => {
      var _a;
      return independentCombinators ? null : ((_a = getOption(combinators, combinator)) == null ? void 0 : _a.className) ?? "";
    },
    [combinator, combinators, independentCombinators]
  );
  const outerClassName = clsx(
    getRuleGroupClassname(ruleGroup),
    combinatorBasedClassName,
    standardClassnames.ruleGroup,
    classNamesProp.ruleGroup,
    {
      [standardClassnames.disabled]: disabled,
      [standardClassnames.dndDragging]: isDragging
    },
    validationClassName
  );
  return {
    addGroup,
    addRule,
    classNames,
    cloneGroup,
    combinator,
    disabled,
    dragMonitorId,
    dragRef,
    dropMonitorId,
    dropRef,
    isDragging,
    isOver,
    onCombinatorChange,
    onGroupAdd,
    onIndependentCombinatorChange,
    onNotToggleChange,
    outerClassName,
    parentDisabled,
    previewRef,
    removeGroup,
    ruleGroup,
    toggleLockGroup,
    validationClassName,
    validationResult
  };
};
var useSelectElementChangeHandler = ({
  multiple,
  onChange
}) => {
  const selectElementChangeHandler = (0, import_react12.useMemo)(
    () => multiple ? (e) => onChange(Array.from(e.target.selectedOptions).map((o) => o.value)) : (e) => onChange(e.target.value),
    [multiple, onChange]
  );
  return selectElementChangeHandler;
};
var useStopEventPropagation = (methods) => {
  const wrappedMethods = {};
  for (const [fnName, fn] of objectEntries(methods)) {
    wrappedMethods[fnName] = (event, context) => {
      event.preventDefault();
      event.stopPropagation();
      fn(event, context);
    };
  }
  return wrappedMethods;
};
var useValueEditor = ({
  handleOnChange,
  inputType,
  operator,
  value,
  listsAsArrays,
  parseNumbers,
  values,
  type,
  skipHook
}) => {
  (0, import_react13.useEffect)(() => {
    if (skipHook)
      return;
    if (type !== "multiselect" && !["between", "notBetween", "in", "notIn"].includes(operator) && (Array.isArray(value) || inputType === "number" && typeof value === "string" && value.includes(","))) {
      handleOnChange(toArray(value)[0] ?? "");
    }
  }, [handleOnChange, inputType, operator, skipHook, type, value]);
  const valueAsArray = (0, import_react13.useMemo)(() => toArray(value), [value]);
  const multiValueHandler = (0, import_react13.useCallback)(
    (v, i) => {
      const val = produce(valueAsArray, (va) => {
        va[i] = parseNumber(v, { parseNumbers });
        if (i === 0 && (operator === "between" || operator === "notBetween") && !va[1]) {
          va[1] = getFirstOption(values);
        }
      });
      handleOnChange(listsAsArrays ? val : joinWith(val, ","));
    },
    [handleOnChange, listsAsArrays, operator, parseNumbers, valueAsArray, values]
  );
  return {
    /**
     * Array of values for when the main value represents a list, e.g. when operator
     * is "between" or "in".
     */
    valueAsArray,
    /**
     * An update handler for a series of value editors, e.g. when operator is "between".
     * Calling this function will update a single element of the value array and leave
     * the rest of the array as is.
     *
     * @param {string} val The new value for the editor
     * @param {number} idx The index of the editor (and the array element to update)
     */
    multiValueHandler
  };
};
var useValueSelector = ({
  handleOnChange,
  listsAsArrays = false,
  multiple = false,
  value
}) => {
  const onChange = (0, import_react14.useCallback)(
    (v) => {
      if (multiple) {
        const valueAsArray = toArray(v);
        handleOnChange(listsAsArrays ? valueAsArray : joinWith(valueAsArray, ","));
      } else {
        handleOnChange(v);
      }
    },
    [handleOnChange, listsAsArrays, multiple]
  );
  const val = (0, import_react14.useMemo)(() => multiple ? toArray(value) : value, [multiple, value]);
  return {
    /**
     * Memoized change handler for value selectors
     */
    onChange,
    /**
     * The value as provided or, if appropriate, as an array
     */
    val
  };
};
var QueryBuilderContext = (0, import_react15.createContext)({});
QueryBuilderContext.displayName = "QueryBuilderContext";
var QueryBuilder = (props) => {
  const qb = { ...props, ...useQueryBuilder(props) };
  const { ruleGroup: RuleGroupControlElement } = qb.schema.controls;
  return React7.createElement(
    QueryBuilderContext.Provider,
    {
      key: qb.schema.enableDragAndDrop ? "dnd" : "no-dnd",
      value: qb.rqbContext
    },
    React7.createElement(
      "div",
      {
        className: qb.wrapperClassName,
        "data-dnd": qb.schema.enableDragAndDrop ? "enabled" : "disabled",
        "data-inlinecombinators": qb.schema.independentCombinators || qb.schema.showCombinatorsBetweenRules ? "enabled" : "disabled"
      },
      React7.createElement(
        RuleGroupControlElement,
        {
          translations: qb.translations,
          ruleGroup: qb.query,
          rules: qb.query.rules,
          combinator: "combinator" in qb.query ? qb.query.combinator : void 0,
          not: !!qb.query.not,
          schema: qb.schema,
          actions: qb.actions,
          id: qb.query.id,
          path: [],
          disabled: !!qb.query.disabled || qb.queryDisabled,
          parentDisabled: qb.queryDisabled,
          context: qb.context
        }
      )
    )
  );
};
QueryBuilder.displayName = "QueryBuilder";
var Rule = (props) => {
  const r2 = { ...props, ...useRule(props) };
  const { cloneRule, toggleLockRule, removeRule } = r2;
  const methodsWithoutEventPropagation = useStopEventPropagation({
    cloneRule,
    toggleLockRule,
    removeRule
  });
  const subComponentProps = { ...r2, ...methodsWithoutEventPropagation };
  return React8.createElement(
    "div",
    {
      ref: r2.dndRef,
      "data-testid": TestID.rule,
      "data-dragmonitorid": r2.dragMonitorId,
      "data-dropmonitorid": r2.dropMonitorId,
      className: r2.outerClassName,
      "data-rule-id": r2.id,
      "data-level": r2.path.length,
      "data-path": JSON.stringify(r2.path)
    },
    React8.createElement(RuleComponents, { ...subComponentProps })
  );
};
Rule.displayName = "Rule";
var RuleComponents = (r2) => {
  const {
    schema: {
      controls: {
        dragHandle: DragHandleControlElement,
        fieldSelector: FieldSelectorControlElement,
        operatorSelector: OperatorSelectorControlElement,
        valueSourceSelector: ValueSourceSelectorControlElement,
        valueEditor: ValueEditorControlElement,
        cloneRuleAction: CloneRuleActionControlElement,
        lockRuleAction: LockRuleActionControlElement,
        removeRuleAction: RemoveRuleActionControlElement
      }
    }
  } = r2;
  return React8.createElement(React8.Fragment, null, r2.schema.enableDragAndDrop && React8.createElement(
    DragHandleControlElement,
    {
      testID: TestID.dragHandle,
      ref: r2.dragRef,
      level: r2.path.length,
      path: r2.path,
      title: r2.translations.dragHandle.title,
      label: r2.translations.dragHandle.label,
      className: r2.classNames.dragHandle,
      disabled: r2.disabled,
      context: r2.context,
      validation: r2.validationResult,
      schema: r2.schema,
      ruleOrGroup: r2.rule
    }
  ), React8.createElement(
    FieldSelectorControlElement,
    {
      testID: TestID.fields,
      options: r2.schema.fields,
      title: r2.translations.fields.title,
      value: r2.rule.field,
      operator: r2.rule.operator,
      className: r2.classNames.fields,
      handleOnChange: r2.generateOnChangeHandler("field"),
      level: r2.path.length,
      path: r2.path,
      disabled: r2.disabled,
      context: r2.context,
      validation: r2.validationResult,
      schema: r2.schema,
      rule: r2.rule
    }
  ), (r2.schema.autoSelectField || r2.rule.field !== r2.translations.fields.placeholderName) && React8.createElement(React8.Fragment, null, React8.createElement(
    OperatorSelectorControlElement,
    {
      testID: TestID.operators,
      field: r2.rule.field,
      fieldData: r2.fieldData,
      title: r2.translations.operators.title,
      options: r2.operators,
      value: r2.rule.operator,
      className: r2.classNames.operators,
      handleOnChange: r2.generateOnChangeHandler("operator"),
      level: r2.path.length,
      path: r2.path,
      disabled: r2.disabled,
      context: r2.context,
      validation: r2.validationResult,
      schema: r2.schema,
      rule: r2.rule
    }
  ), (r2.schema.autoSelectOperator || r2.rule.operator !== r2.translations.operators.placeholderName) && !r2.hideValueControls && React8.createElement(React8.Fragment, null, !["null", "notNull"].includes(r2.rule.operator) && r2.valueSources.length > 1 && React8.createElement(
    ValueSourceSelectorControlElement,
    {
      testID: TestID.valueSourceSelector,
      field: r2.rule.field,
      fieldData: r2.fieldData,
      title: r2.translations.valueSourceSelector.title,
      options: r2.valueSourceOptions,
      value: r2.rule.valueSource ?? "value",
      className: r2.classNames.valueSource,
      handleOnChange: r2.generateOnChangeHandler("valueSource"),
      level: r2.path.length,
      path: r2.path,
      disabled: r2.disabled,
      context: r2.context,
      validation: r2.validationResult,
      schema: r2.schema,
      rule: r2.rule
    }
  ), React8.createElement(
    ValueEditorControlElement,
    {
      testID: TestID.valueEditor,
      field: r2.rule.field,
      fieldData: r2.fieldData,
      title: r2.translations.value.title,
      operator: r2.rule.operator,
      value: r2.rule.value,
      valueSource: r2.rule.valueSource ?? "value",
      type: r2.valueEditorType,
      inputType: r2.inputType,
      values: r2.values,
      listsAsArrays: r2.schema.listsAsArrays,
      parseNumbers: r2.schema.parseNumbers,
      separator: r2.valueEditorSeparator,
      className: r2.classNames.value,
      handleOnChange: r2.generateOnChangeHandler("value"),
      level: r2.path.length,
      path: r2.path,
      disabled: r2.disabled,
      context: r2.context,
      validation: r2.validationResult,
      schema: r2.schema,
      rule: r2.rule
    }
  ))), r2.schema.showCloneButtons && React8.createElement(
    CloneRuleActionControlElement,
    {
      testID: TestID.cloneRule,
      label: r2.translations.cloneRule.label,
      title: r2.translations.cloneRule.title,
      className: r2.classNames.cloneRule,
      handleOnClick: r2.cloneRule,
      level: r2.path.length,
      path: r2.path,
      disabled: r2.disabled,
      context: r2.context,
      validation: r2.validationResult,
      ruleOrGroup: r2.rule,
      schema: r2.schema
    }
  ), r2.schema.showLockButtons && React8.createElement(
    LockRuleActionControlElement,
    {
      testID: TestID.lockRule,
      label: r2.translations.lockRule.label,
      title: r2.translations.lockRule.title,
      className: r2.classNames.lockRule,
      handleOnClick: r2.toggleLockRule,
      level: r2.path.length,
      path: r2.path,
      disabled: r2.disabled,
      disabledTranslation: r2.parentDisabled ? void 0 : r2.translations.lockRuleDisabled,
      context: r2.context,
      validation: r2.validationResult,
      ruleOrGroup: r2.rule,
      schema: r2.schema
    }
  ), React8.createElement(
    RemoveRuleActionControlElement,
    {
      testID: TestID.removeRule,
      label: r2.translations.removeRule.label,
      title: r2.translations.removeRule.title,
      className: r2.classNames.removeRule,
      handleOnClick: r2.removeRule,
      level: r2.path.length,
      path: r2.path,
      disabled: r2.disabled,
      context: r2.context,
      validation: r2.validationResult,
      ruleOrGroup: r2.rule,
      schema: r2.schema
    }
  ));
};
var RuleGroup = (props) => {
  const rg = { ...props, ...useRuleGroup(props) };
  const { addRule, addGroup, cloneGroup, toggleLockGroup, removeGroup } = rg;
  const methodsWithoutEventPropagation = useStopEventPropagation({
    addRule,
    addGroup,
    cloneGroup,
    toggleLockGroup,
    removeGroup
  });
  const subComponentProps = { ...rg, ...methodsWithoutEventPropagation };
  return React9.createElement(
    "div",
    {
      ref: rg.previewRef,
      className: rg.outerClassName,
      "data-testid": TestID.ruleGroup,
      "data-dragmonitorid": rg.dragMonitorId,
      "data-dropmonitorid": rg.dropMonitorId,
      "data-rule-group-id": rg.id,
      "data-level": rg.path.length,
      "data-path": JSON.stringify(rg.path)
    },
    React9.createElement("div", { ref: rg.dropRef, className: rg.classNames.header }, React9.createElement(RuleGroupHeaderComponents, { ...subComponentProps })),
    React9.createElement("div", { className: rg.classNames.body }, React9.createElement(RuleGroupBodyComponents, { ...subComponentProps }))
  );
};
RuleGroup.displayName = "RuleGroup";
var RuleGroupHeaderComponents = (rg) => {
  const {
    schema: {
      controls: {
        dragHandle: DragHandleControlElement,
        combinatorSelector: CombinatorSelectorControlElement,
        notToggle: NotToggleControlElement,
        addRuleAction: AddRuleActionControlElement,
        addGroupAction: AddGroupActionControlElement,
        cloneGroupAction: CloneGroupActionControlElement,
        lockGroupAction: LockGroupActionControlElement,
        removeGroupAction: RemoveGroupActionControlElement
      }
    }
  } = rg;
  return React9.createElement(React9.Fragment, null, rg.path.length > 0 && rg.schema.enableDragAndDrop && React9.createElement(
    DragHandleControlElement,
    {
      key: TestID.dragHandle,
      testID: TestID.dragHandle,
      ref: rg.dragRef,
      level: rg.path.length,
      path: rg.path,
      title: rg.translations.dragHandle.title,
      label: rg.translations.dragHandle.label,
      className: rg.classNames.dragHandle,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      schema: rg.schema,
      ruleOrGroup: rg.ruleGroup
    }
  ), !rg.schema.showCombinatorsBetweenRules && !rg.schema.independentCombinators && React9.createElement(
    CombinatorSelectorControlElement,
    {
      key: TestID.combinators,
      testID: TestID.combinators,
      options: rg.schema.combinators,
      value: rg.combinator,
      title: rg.translations.combinators.title,
      className: rg.classNames.combinators,
      handleOnChange: rg.onCombinatorChange,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      schema: rg.schema
    }
  ), rg.schema.showNotToggle && React9.createElement(
    NotToggleControlElement,
    {
      key: TestID.notToggle,
      testID: TestID.notToggle,
      className: rg.classNames.notToggle,
      title: rg.translations.notToggle.title,
      label: rg.translations.notToggle.label,
      checked: rg.ruleGroup.not,
      handleOnChange: rg.onNotToggleChange,
      level: rg.path.length,
      disabled: rg.disabled,
      path: rg.path,
      context: rg.context,
      validation: rg.validationResult,
      schema: rg.schema,
      ruleGroup: rg.ruleGroup
    }
  ), React9.createElement(
    AddRuleActionControlElement,
    {
      key: TestID.addRule,
      testID: TestID.addRule,
      label: rg.translations.addRule.label,
      title: rg.translations.addRule.title,
      className: rg.classNames.addRule,
      handleOnClick: rg.addRule,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ), React9.createElement(
    AddGroupActionControlElement,
    {
      key: TestID.addGroup,
      testID: TestID.addGroup,
      label: rg.translations.addGroup.label,
      title: rg.translations.addGroup.title,
      className: rg.classNames.addGroup,
      handleOnClick: rg.addGroup,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ), rg.schema.showCloneButtons && rg.path.length >= 1 && React9.createElement(
    CloneGroupActionControlElement,
    {
      key: TestID.cloneGroup,
      testID: TestID.cloneGroup,
      label: rg.translations.cloneRuleGroup.label,
      title: rg.translations.cloneRuleGroup.title,
      className: rg.classNames.cloneGroup,
      handleOnClick: rg.cloneGroup,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ), rg.schema.showLockButtons && React9.createElement(
    LockGroupActionControlElement,
    {
      key: TestID.lockGroup,
      testID: TestID.lockGroup,
      label: rg.translations.lockGroup.label,
      title: rg.translations.lockGroup.title,
      className: rg.classNames.lockGroup,
      handleOnClick: rg.toggleLockGroup,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      disabledTranslation: rg.parentDisabled ? void 0 : rg.translations.lockGroupDisabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ), rg.path.length > 0 && React9.createElement(
    RemoveGroupActionControlElement,
    {
      key: TestID.removeGroup,
      testID: TestID.removeGroup,
      label: rg.translations.removeGroup.label,
      title: rg.translations.removeGroup.title,
      className: rg.classNames.removeGroup,
      handleOnClick: rg.removeGroup,
      rules: rg.ruleGroup.rules,
      level: rg.path.length,
      path: rg.path,
      disabled: rg.disabled,
      context: rg.context,
      validation: rg.validationResult,
      ruleOrGroup: rg.ruleGroup,
      schema: rg.schema
    }
  ));
};
var RuleGroupBodyComponents = (rg) => {
  const {
    schema: {
      controls: {
        combinatorSelector: CombinatorSelectorControlElement,
        inlineCombinator: InlineCombinatorControlElement,
        ruleGroup: RuleGroupControlElement,
        rule: RuleControlElement
      }
    }
  } = rg;
  return React9.createElement(React9.Fragment, null, rg.ruleGroup.rules.map((r2, idx) => {
    const thisPath = [...rg.path, idx];
    const thisPathDisabled = rg.disabled || typeof r2 !== "string" && r2.disabled || rg.schema.disabledPaths.some((p) => pathsAreEqual(thisPath, p));
    const key = typeof r2 === "string" ? [...thisPath, r2].join("-") : r2.id;
    return React9.createElement(import_react16.Fragment, { key }, idx > 0 && !rg.schema.independentCombinators && rg.schema.showCombinatorsBetweenRules && React9.createElement(
      InlineCombinatorControlElement,
      {
        key: "inline-combinator",
        options: rg.schema.combinators,
        value: rg.combinator,
        title: rg.translations.combinators.title,
        className: rg.classNames.combinators,
        handleOnChange: rg.onCombinatorChange,
        rules: rg.ruleGroup.rules,
        level: rg.path.length,
        context: rg.context,
        validation: rg.validationResult,
        component: CombinatorSelectorControlElement,
        path: thisPath,
        disabled: rg.disabled,
        independentCombinators: rg.schema.independentCombinators,
        schema: rg.schema
      }
    ), typeof r2 === "string" ? React9.createElement(
      InlineCombinatorControlElement,
      {
        key: "inline-combinator-str",
        options: rg.schema.combinators,
        value: r2,
        title: rg.translations.combinators.title,
        className: rg.classNames.combinators,
        handleOnChange: (val) => rg.onIndependentCombinatorChange(val, idx),
        rules: rg.ruleGroup.rules,
        level: rg.path.length,
        context: rg.context,
        validation: rg.validationResult,
        component: CombinatorSelectorControlElement,
        path: thisPath,
        disabled: thisPathDisabled,
        independentCombinators: rg.schema.independentCombinators,
        schema: rg.schema
      }
    ) : isRuleGroup(r2) ? React9.createElement(
      RuleGroupControlElement,
      {
        key: "rule-group",
        id: r2.id,
        schema: rg.schema,
        actions: rg.actions,
        path: thisPath,
        translations: rg.translations,
        ruleGroup: r2,
        rules: r2.rules,
        combinator: isRuleGroupType(r2) ? r2.combinator : void 0,
        not: !!r2.not,
        disabled: thisPathDisabled,
        parentDisabled: rg.parentDisabled || rg.disabled,
        context: rg.context
      }
    ) : React9.createElement(
      RuleControlElement,
      {
        key: "rule",
        id: r2.id,
        rule: r2,
        field: r2.field,
        operator: r2.operator,
        value: r2.value,
        valueSource: r2.valueSource,
        schema: rg.schema,
        actions: rg.actions,
        path: thisPath,
        disabled: thisPathDisabled,
        parentDisabled: rg.parentDisabled || rg.disabled,
        translations: rg.translations,
        context: rg.context
      }
    ));
  }));
};
var ValueSelector = ({
  className,
  handleOnChange,
  options,
  title,
  value,
  multiple,
  listsAsArrays,
  disabled,
  testID
}) => {
  const { onChange, val } = useValueSelector({ handleOnChange, listsAsArrays, multiple, value });
  const selectElementChangeHandler = useSelectElementChangeHandler({ multiple, onChange });
  return React10.createElement(
    "select",
    {
      "data-testid": testID,
      className,
      value: val,
      title,
      disabled,
      multiple: !!multiple,
      onChange: selectElementChangeHandler
    },
    toOptions(options)
  );
};
ValueSelector.displayName = "ValueSelector";
var ValueEditor = ({
  operator,
  value,
  handleOnChange,
  title,
  className,
  type = "text",
  inputType = "text",
  values = [],
  listsAsArrays,
  parseNumbers,
  fieldData,
  disabled,
  separator = null,
  skipHook = false,
  testID,
  selectorComponent: SelectorComponent = ValueSelector,
  ...props
}) => {
  const { valueAsArray, multiValueHandler } = useValueEditor({
    skipHook,
    handleOnChange,
    inputType,
    operator,
    value,
    type,
    listsAsArrays,
    parseNumbers,
    values
  });
  if (operator === "null" || operator === "notNull") {
    return null;
  }
  const placeHolderText = (fieldData == null ? void 0 : fieldData.placeholder) ?? "";
  const inputTypeCoerced = ["in", "notIn"].includes(operator) ? "text" : inputType || "text";
  if ((operator === "between" || operator === "notBetween") && (type === "select" || type === "text")) {
    const editors = ["from", "to"].map((key, i) => {
      if (type === "text") {
        return React11.createElement(
          "input",
          {
            key,
            type: inputTypeCoerced,
            placeholder: placeHolderText,
            value: valueAsArray[i] ?? "",
            className: standardClassnames.valueListItem,
            disabled,
            onChange: (e) => multiValueHandler(e.target.value, i)
          }
        );
      }
      return React11.createElement(
        SelectorComponent,
        {
          ...props,
          key,
          className: standardClassnames.valueListItem,
          handleOnChange: (v) => multiValueHandler(v, i),
          disabled,
          value: valueAsArray[i] ?? getFirstOption(values),
          options: values,
          listsAsArrays
        }
      );
    });
    return React11.createElement("span", { "data-testid": testID, className, title }, editors[0], separator, editors[1]);
  }
  switch (type) {
    case "select":
    case "multiselect":
      return React11.createElement(
        SelectorComponent,
        {
          ...props,
          testID,
          className,
          title,
          handleOnChange,
          disabled,
          value,
          options: values,
          multiple: type === "multiselect",
          listsAsArrays
        }
      );
    case "textarea":
      return React11.createElement(
        "textarea",
        {
          "data-testid": testID,
          placeholder: placeHolderText,
          value,
          title,
          className,
          disabled,
          onChange: (e) => handleOnChange(e.target.value)
        }
      );
    case "switch":
    case "checkbox":
      return React11.createElement(
        "input",
        {
          "data-testid": testID,
          type: "checkbox",
          className,
          title,
          onChange: (e) => handleOnChange(e.target.checked),
          checked: !!value,
          disabled
        }
      );
    case "radio":
      return React11.createElement("span", { "data-testid": testID, className, title }, values.map((v) => React11.createElement("label", { key: v.name }, React11.createElement(
        "input",
        {
          type: "radio",
          value: v.name,
          disabled,
          checked: value === v.name,
          onChange: (e) => handleOnChange(e.target.value)
        }
      ), v.label)));
  }
  return React11.createElement(
    "input",
    {
      "data-testid": testID,
      type: inputTypeCoerced,
      placeholder: placeHolderText,
      value,
      title,
      className,
      disabled,
      onChange: (e) => handleOnChange(parseNumber(e.target.value, { parseNumbers }))
    }
  );
};
ValueEditor.displayName = "ValueEditor";
var defaultControlElements = {
  addGroupAction: ActionElement,
  removeGroupAction: ActionElement,
  cloneGroupAction: ActionElement,
  cloneRuleAction: ActionElement,
  addRuleAction: ActionElement,
  removeRuleAction: ActionElement,
  combinatorSelector: ValueSelector,
  inlineCombinator: InlineCombinator,
  fieldSelector: ValueSelector,
  operatorSelector: ValueSelector,
  valueEditor: ValueEditor,
  notToggle: NotToggle,
  ruleGroup: RuleGroup,
  rule: Rule,
  dragHandle: DragHandle,
  lockRuleAction: ActionElement,
  lockGroupAction: ActionElement,
  valueSourceSelector: ValueSelector
};
var src_default = QueryBuilder;
export {
  ActionElement,
  DragHandle,
  InlineCombinator,
  LogType,
  NotToggle,
  QueryBuilder,
  QueryBuilderContext,
  Rule,
  RuleComponents,
  RuleGroup,
  RuleGroupBodyComponents,
  RuleGroupHeaderComponents,
  TestID,
  ValueEditor,
  ValueSelector,
  add,
  convertFromIC,
  convertQuery,
  convertToIC,
  src_default as default,
  defaultCELValueProcessor,
  defaultCombinators,
  defaultCombinatorsExtended,
  defaultControlClassnames,
  defaultControlElements,
  defaultJoinChar,
  defaultMongoDBValueProcessor,
  defaultOperatorNegationMap,
  defaultOperators,
  defaultPlaceholderFieldGroupLabel,
  defaultPlaceholderFieldLabel,
  defaultPlaceholderFieldName,
  defaultPlaceholderOperatorGroupLabel,
  defaultPlaceholderOperatorLabel,
  defaultPlaceholderOperatorName,
  defaultRuleProcessorCEL,
  defaultRuleProcessorJsonLogic,
  defaultRuleProcessorMongoDB,
  defaultRuleProcessorSQL,
  defaultRuleProcessorSpEL,
  defaultSpELValueProcessor,
  defaultTranslations,
  defaultValidator,
  defaultValueProcessor,
  defaultValueProcessorByRule,
  defaultValueProcessorCELByRule,
  defaultValueProcessorMongoDBByRule,
  defaultValueProcessorSpELByRule,
  filterFieldsByComparator,
  findPath,
  formatQuery,
  generateID,
  getCommonAncestorPath,
  getCompatContextProvider,
  getFirstOption,
  getOption,
  getParentPath,
  getValidationClassNames,
  getValueSourcesUtil,
  groupInvalidReasons,
  isAncestor,
  isOptionGroupArray,
  isPojo,
  isRuleGroup,
  isRuleGroupType,
  isRuleGroupTypeIC,
  isRuleOrGroupValid,
  isValidationResult,
  joinWith,
  jsonLogicAdditionalOperators,
  mergeClassnames,
  messages_exports as messages,
  move,
  nullFreeArray,
  numericRegex,
  objectEntries,
  objectKeys,
  parseCEL,
  parseJsonLogic,
  parseMongoDB,
  parseNumber,
  parseSQL,
  pathIsDisabled,
  pathsAreEqual,
  prepareRule,
  prepareRuleGroup,
  prepareRuleOrGroup,
  regenerateID,
  regenerateIDs,
  remove,
  splitBy,
  standardClassnames,
  toArray,
  toOptions,
  transformQuery,
  trimIfString,
  uniqByName,
  uniqOptGroups,
  update,
  useControlledOrUncontrolled,
  useDeprecatedProps,
  useMergedContext,
  usePreferProp,
  usePrevious,
  useQueryBuilder,
  useReactDndWarning,
  useRule,
  useRuleGroup,
  useSelectElementChangeHandler,
  useStopEventPropagation,
  useValueEditor,
  useValueSelector
};
//# sourceMappingURL=react-querybuilder.js.map
