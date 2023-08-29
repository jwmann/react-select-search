var $a9A1a$reactjsxruntime = require("react/jsx-runtime");
var $a9A1a$react = require("react");
require("prop-types");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
$parcel$export(module.exports, "useSelect", () => $4bbd6d22e42ff57c$export$2e2bcd8739ae039);




function $2484e3d63aab434d$export$2e2bcd8739ae039(v1, v2) {
    return String(v1) === String(v2);
}


function $595e451383f14c00$export$2e2bcd8739ae039(value, options) {
    if (Array.isArray(value)) return value.map((v)=>options.find((o)=>(0, $2484e3d63aab434d$export$2e2bcd8739ae039)(o.value, v))).filter((o)=>o);
    return options.find((o)=>(0, $2484e3d63aab434d$export$2e2bcd8739ae039)(o.value, value)) || null;
}



function $5461a40aff0a72e7$export$2e2bcd8739ae039(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}


function $b0b2d97816871546$export$2e2bcd8739ae039(newOption, oldOption, multiple) {
    if (!newOption) return oldOption;
    if (!multiple) return newOption;
    if (!oldOption) return (0, $5461a40aff0a72e7$export$2e2bcd8739ae039)(newOption);
    const nextOption = (0, $5461a40aff0a72e7$export$2e2bcd8739ae039)(oldOption);
    const newOptionIndex = nextOption.findIndex((o)=>(0, $2484e3d63aab434d$export$2e2bcd8739ae039)(o.value, newOption.value));
    if (newOptionIndex >= 0) nextOption.splice(newOptionIndex, 1);
    else nextOption.push(newOption);
    return nextOption;
}


function $53ccf5af3f1de595$export$2e2bcd8739ae039(option, options, placeholder) {
    if (!option && !placeholder) return options && options.length ? options[0].name || "" : "";
    const isMultiple = Array.isArray(option);
    if (!option && !isMultiple) return "";
    return isMultiple ? option.map((o)=>o.name).filter(Boolean).join(", ") : option.name || "";
}


function $2664d3f4613d5d45$export$2e2bcd8739ae039(option) {
    if (!option) return null;
    if (Array.isArray(option)) return option.filter(Boolean).map((o)=>o.value);
    return option.value || null;
}


function $d5af33248d9ae6a9$export$2e2bcd8739ae039(options) {
    const nextOptions = [];
    options.forEach((option)=>{
        if (option.group) {
            const group = nextOptions.findIndex((o)=>o.type === "group" && o.name === option.group);
            if (group >= 0) nextOptions[group].items.push(option);
            else nextOptions.push({
                items: [
                    option
                ],
                type: "group",
                name: option.group
            });
        } else nextOptions.push(option);
    });
    return nextOptions;
}


function $20d645590e0d9ebe$var$search(q, text) {
    const searchLength = q.length;
    const textLength = text.length;
    if (searchLength > textLength) return false;
    if (text.indexOf(q) >= 0) return true;
    mainLoop: for(let i = 0, j = 0; i < searchLength; i += 1){
        const ch = q.charCodeAt(i);
        while(j < textLength){
            if (text.charCodeAt(j++) === ch) continue mainLoop;
        }
        return false;
    }
    return true;
}
function $20d645590e0d9ebe$export$2e2bcd8739ae039(options, query) {
    return !query.length ? options : options.filter((o)=>$20d645590e0d9ebe$var$search(query.toLowerCase(), `${o.name} ${o.group || ""}`.trim().toLowerCase()));
}


function $8ef71079b895e810$export$2e2bcd8739ae039(middleware, items, query) {
    return middleware.filter(Boolean).reduce((data, cb)=>cb(data, query), items).map((item, i)=>({
            ...item,
            index: i
        }));
}



function $31a928e85073dee8$export$2e2bcd8739ae039(options) {
    let index = 0;
    return options.map((option)=>{
        if (option.type === "group") return option.items.map((o)=>({
                ...o,
                group: option.name,
                index: index++
            }));
        return {
            ...option,
            index: index++
        };
    }).flat();
}


function $0b51441790e9d9fb$export$2e2bcd8739ae039(defaultOptions, getOptions, debounceTime, search) {
    const [options, setOptions] = (0, $a9A1a$react.useState)(()=>(0, $31a928e85073dee8$export$2e2bcd8739ae039)(defaultOptions));
    const [fetching, setFetching] = (0, $a9A1a$react.useState)(false);
    (0, $a9A1a$react.useEffect)(()=>{
        let timeout;
        if (!getOptions) return;
        timeout = setTimeout(()=>{
            const optionsReq = getOptions(search, options);
            setFetching(true);
            Promise.resolve(optionsReq).then((newOptions)=>setOptions((0, $31a928e85073dee8$export$2e2bcd8739ae039)(newOptions))).finally(()=>setFetching(false));
        }, debounceTime);
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        search
    ]);
    (0, $a9A1a$react.useEffect)(()=>{
        setOptions((0, $31a928e85073dee8$export$2e2bcd8739ae039)(defaultOptions));
    }, [
        defaultOptions
    ]);
    return [
        options,
        fetching
    ];
}



function $1eeba9d0f0755238$export$2e2bcd8739ae039(current, dir, options) {
    const max = options.length - 1;
    let option = null;
    let i = -1;
    let newHighlighted = current;
    while((i++) <= max && (!option || option.disabled)){
        newHighlighted = dir === "down" ? newHighlighted + 1 : newHighlighted - 1;
        if (newHighlighted < 0) newHighlighted = max;
        else if (newHighlighted > max) newHighlighted = 0;
        option = options[newHighlighted];
    }
    return newHighlighted;
}


function $b4df433b5f503385$export$2e2bcd8739ae039(options, onSelect, ref) {
    const [highlighted, setHighlighted] = (0, $a9A1a$react.useState)(-1);
    return [
        {
            onKeyDown: (e)=>{
                const key = e.key.replace("Arrow", "").toLowerCase();
                if (key === "down" || key === "up") {
                    e.preventDefault();
                    setHighlighted((0, $1eeba9d0f0755238$export$2e2bcd8739ae039)(highlighted, key, options));
                }
            },
            onKeyUp: (e)=>{
                if (e.key === "Escape") {
                    e.preventDefault();
                    ref.current.blur();
                } else if (e.key === "Enter") {
                    e.preventDefault();
                    if (options[highlighted]) onSelect(options[highlighted].value);
                }
            }
        },
        highlighted,
        setHighlighted
    ];
}


const $4bbd6d22e42ff57c$var$nullCb = ()=>{};
function $4bbd6d22e42ff57c$export$2e2bcd8739ae039({ options: defaultOptions , defaultValue: defaultValue , value: value , multiple: multiple , search: search , onChange: onChange = $4bbd6d22e42ff57c$var$nullCb , onFocus: onFocus = $4bbd6d22e42ff57c$var$nullCb , onBlur: onBlur = $4bbd6d22e42ff57c$var$nullCb , closeOnSelect: closeOnSelect = true , placeholder: placeholder , getOptions: getOptions , filterOptions: filterOptions , useFuzzySearch: useFuzzySearch = true , debounce: debounce  }) {
    const ref = (0, $a9A1a$react.useRef)();
    const [option, setOption] = (0, $a9A1a$react.useState)(null);
    const [q, setSearch] = (0, $a9A1a$react.useState)("");
    const [focus, setFocus] = (0, $a9A1a$react.useState)(false);
    const [options, fetching] = (0, $0b51441790e9d9fb$export$2e2bcd8739ae039)(defaultOptions, getOptions, debounce, q);
    const onSelect = (v)=>{
        const newOption = (0, $b0b2d97816871546$export$2e2bcd8739ae039)((0, $595e451383f14c00$export$2e2bcd8739ae039)(decodeURIComponent(v), options), option, multiple);
        if (value === undefined) setOption(newOption);
        onChange((0, $2664d3f4613d5d45$export$2e2bcd8739ae039)(newOption), newOption);
        setTimeout(()=>{
            if (ref.current && closeOnSelect) ref.current.blur();
        }, 0);
    };
    const middleware = [
        useFuzzySearch ? (0, $20d645590e0d9ebe$export$2e2bcd8739ae039) : null,
        ...filterOptions ? filterOptions : []
    ];
    const filteredOptions = (0, $d5af33248d9ae6a9$export$2e2bcd8739ae039)((0, $8ef71079b895e810$export$2e2bcd8739ae039)(middleware, options, q));
    const [keyHandlers, highlighted, setHighlighted] = (0, $b4df433b5f503385$export$2e2bcd8739ae039)(filteredOptions, onSelect, ref);
    const snapshot = {
        search: q,
        focus: focus,
        option: option,
        value: (0, $2664d3f4613d5d45$export$2e2bcd8739ae039)(option),
        fetching: fetching,
        highlighted: highlighted,
        options: filteredOptions,
        displayValue: (0, $53ccf5af3f1de595$export$2e2bcd8739ae039)(option, options, placeholder)
    };
    const valueProps = {
        tabIndex: "0",
        readOnly: !search,
        placeholder: placeholder,
        value: focus && search ? q : snapshot.displayValue,
        ref: ref,
        ...keyHandlers,
        onFocus: (e)=>{
            setFocus(true);
            onFocus(e);
        },
        onBlur: (e)=>{
            setFocus(false);
            setSearch("");
            setHighlighted(-1);
            onBlur(e);
        },
        onMouseDown: (e)=>{
            if (focus) {
                e.preventDefault();
                ref.current.blur();
            }
        },
        onChange: search ? ({ target: target  })=>setSearch(target.value) : null
    };
    const optionProps = {
        tabIndex: "-1",
        onMouseDown (e) {
            e.preventDefault();
            onSelect(e.currentTarget.value);
        }
    };
    (0, $a9A1a$react.useEffect)(()=>{
        setOption((0, $595e451383f14c00$export$2e2bcd8739ae039)(value === undefined ? defaultValue : value, options));
    }, [
        value,
        options
    ]);
    return [
        snapshot,
        valueProps,
        optionProps
    ];
}


const $801112dfb0745bfa$var$isString = (str)=>typeof str === "string";
const $801112dfb0745bfa$var$getClassName = (str, className)=>$801112dfb0745bfa$var$isString(className) ? `${className}-${str}` : className[str];
function $801112dfb0745bfa$export$2e2bcd8739ae039(classNames, className) {
    if ($801112dfb0745bfa$var$isString(classNames)) return $801112dfb0745bfa$var$getClassName(classNames, className);
    return Object.entries(classNames).filter(([cls, display])=>cls && display).map(([cls])=>$801112dfb0745bfa$var$getClassName(cls, className)).join(" ");
}






function $3ab465bfb745ddbf$var$Option({ optionProps: optionProps , highlighted: highlighted , selected: selected , option: option , cls: cls , renderOption: renderOption , disabled: disabled  }) {
    const props = {
        ...optionProps,
        value: encodeURIComponent(option.value),
        disabled: disabled
    };
    const className = cls({
        option: true,
        "is-selected": selected,
        "is-highlighted": highlighted
    });
    return /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsxs)("li", {
        className: cls("row"),
        role: "menuitem",
        "data-index": option.index,
        children: [
            renderOption && renderOption(props, option, {
                selected: selected,
                highlighted: highlighted
            }, className),
            !renderOption && /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)("button", {
                type: "button",
                className: className,
                ...props,
                children: option.name
            })
        ]
    });
}
var $3ab465bfb745ddbf$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a9A1a$react.memo)($3ab465bfb745ddbf$var$Option);


function $d92586316d502a7f$export$2e2bcd8739ae039(option, selectedOption) {
    if (!selectedOption) return false;
    return Array.isArray(selectedOption) ? selectedOption.findIndex((o)=>o.value === option.value) >= 0 : selectedOption.value === option.value;
}


function $7239d77515a2cb4f$var$Options(props) {
    const { options: options , cls: cls , renderOption: renderOption , renderGroupHeader: renderGroupHeader , optionProps: optionProps , snapshot: snapshot , disabled: disabled  } = props;
    return /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)("ul", {
        className: cls("options"),
        children: options.map((o)=>{
            if (o.type === "group") return /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)("li", {
                role: "none",
                className: cls("row"),
                children: /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsxs)("div", {
                    className: cls("group"),
                    children: [
                        /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)("div", {
                            className: cls("group-header"),
                            children: renderGroupHeader ? renderGroupHeader(o.name) : o.name
                        }),
                        /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)($7239d77515a2cb4f$var$Options, {
                            ...props,
                            options: o.items
                        })
                    ]
                })
            }, o.name);
            return /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)((0, $3ab465bfb745ddbf$export$2e2bcd8739ae039), {
                option: o,
                optionProps: optionProps,
                cls: cls,
                renderOption: renderOption,
                selected: (0, $d92586316d502a7f$export$2e2bcd8739ae039)(o, snapshot.option),
                highlighted: snapshot.highlighted === o.index,
                disabled: o.disabled || disabled
            }, o.value);
        })
    });
}
var $7239d77515a2cb4f$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a9A1a$react.memo)($7239d77515a2cb4f$var$Options);


const $fdefef8b289dc6d0$var$SelectSearch = /*#__PURE__*/ (0, $a9A1a$react.forwardRef)(({ disabled: disabled , placeholder: placeholder , multiple: multiple , search: search , autoFocus: autoFocus , autoComplete: autoComplete , id: id , closeOnSelect: closeOnSelect , className: className , renderValue: renderValue , renderOption: renderOption , renderGroupHeader: renderGroupHeader , fuzzySearch: fuzzySearch , emptyMessage: emptyMessage , value: value , ...hookProps }, ref)=>{
    const selectRef = (0, $a9A1a$react.useRef)(null);
    const cls = (classNames)=>(0, $801112dfb0745bfa$export$2e2bcd8739ae039)(classNames, className);
    const [controlledValue, setControlledValue] = (0, $a9A1a$react.useState)(value);
    const [snapshot, valueProps, optionProps] = (0, $4bbd6d22e42ff57c$export$2e2bcd8739ae039)({
        value: controlledValue,
        placeholder: placeholder,
        multiple: multiple,
        search: search,
        closeOnSelect: closeOnSelect && !multiple,
        useFuzzySearch: fuzzySearch,
        ...hookProps
    });
    const { highlighted: highlighted , value: snapValue , fetching: fetching , focus: focus  } = snapshot;
    const props = {
        ...valueProps,
        autoFocus: autoFocus,
        autoComplete: autoComplete,
        disabled: disabled
    };
    (0, $a9A1a$react.useEffect)(()=>{
        const { current: current  } = selectRef;
        if (current) {
            const val = Array.isArray(snapValue) ? snapValue[0] : snapValue;
            const selected = current.querySelector(highlighted > -1 ? `[data-index="${highlighted}"]` : `[value="${encodeURIComponent(val)}"]`);
            if (selected) {
                const rect = current.getBoundingClientRect();
                const selectedRect = selected.getBoundingClientRect();
                current.scrollTop = selected.offsetTop - rect.height / 2 + selectedRect.height / 2;
            }
        }
    }, [
        snapValue,
        highlighted,
        selectRef.current
    ]);
    (0, $a9A1a$react.useEffect)(()=>setControlledValue(value), [
        value
    ]);
    return /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsxs)("div", {
        ref: ref,
        id: id,
        className: cls({
            container: true,
            "is-multiple": multiple,
            "is-disabled": disabled,
            "is-loading": fetching,
            "has-focus": focus
        }),
        children: [
            (!multiple || placeholder || search) && /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsxs)("div", {
                className: cls("value"),
                children: [
                    renderValue && renderValue(props, snapshot, cls("input")),
                    !renderValue && /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)("input", {
                        ...props,
                        className: cls("input")
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsxs)("div", {
                className: cls("select"),
                ref: selectRef,
                onMouseDown: (e)=>e.preventDefault(),
                children: [
                    snapshot.options.length > 0 && /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)((0, $7239d77515a2cb4f$export$2e2bcd8739ae039), {
                        options: snapshot.options,
                        optionProps: optionProps,
                        renderOption: renderOption,
                        renderGroupHeader: renderGroupHeader,
                        disabled: disabled,
                        snapshot: snapshot,
                        cls: cls
                    }),
                    !snapshot.options.length && /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)("ul", {
                        className: cls("options"),
                        children: !snapshot.options.length && emptyMessage && /*#__PURE__*/ (0, $a9A1a$reactjsxruntime.jsx)("li", {
                            className: cls("not-found"),
                            children: emptyMessage
                        })
                    })
                ]
            })
        ]
    });
});
$fdefef8b289dc6d0$var$SelectSearch.defaultProps = {
    // Data
    options: [],
    fuzzySearch: true,
    // Interaction´
    printOptions: "auto",
    closeOnSelect: true,
    debounce: 250,
    // Attributes
    autoComplete: "on",
    // Design
    className: "select-search"
};
$fdefef8b289dc6d0$var$SelectSearch.displayName = "SelectSearch";
var $fdefef8b289dc6d0$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $a9A1a$react.memo)($fdefef8b289dc6d0$var$SelectSearch);



var $4fa36e821943b400$export$2e2bcd8739ae039 = (0, $fdefef8b289dc6d0$export$2e2bcd8739ae039);


//# sourceMappingURL=index.js.map
