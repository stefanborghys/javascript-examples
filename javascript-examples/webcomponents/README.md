# Webcomponents

## Guides

### Web Components
Mozilla - Web Components: [developer.mozilla.org/en-US/docs/Web/Web_Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

Guides:
- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Using templates & slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)

### Web API's
Mozilla - Web API's: [developer.mozilla.org/en-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API)

Specifications:
- [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
  - [parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
  - [getRootNode()](https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode)
  - [hasAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute)
  
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL_API)
- [WebSockets API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

Interfaces:
- [ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)
- [HTMLSlotElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)

#### Slot

A placeholder inside a web component that can be filled with your own markup and lets you create separate DOM trees but present them together.

Slot: [developer.mozilla.org/en-US/docs/Web/HTML/Element/Slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Slot)

HTMLSlotElement: [developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)

Usage:
```
// Web Component:
<div>
  <label>
    <slot name="label">
      <!-- Default value -->
      <span>Hello world!</span>
    </slot>
  </label>
  <button>
    <slot name="button">
      <!-- Default value -->
      <span>Click</span>
    </slot>
  </button>
</div>
```

Interaction
```
const labelSlot = this.shadowRoot.querySelector('slot[name=label]');

// Get the slot's name: 
const name = labelSlot.name; // which is 'label' in this case

// Listen for slot changes:
labelSlot.addEventListener('slotchange', (e) => {
  // the slot's nodes have changed ...

  const assignedNodes = labelSlot.assignedNodes();
  const assignedElements = labelSlot.assignedElements();
});
```