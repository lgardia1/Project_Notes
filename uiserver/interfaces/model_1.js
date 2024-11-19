export const model1 = 
{
    "ui": {
      "header": {
        "type": "panel",
        "component": {
          "title": "Notes",
          "navigation": {
            "type": "panel",
            "items": [
              {
                "type": "component",
                "componentType": "button",
                "id": "latest",
                "label": "Latest",
                "action": "showLatestNotes"
              },
              {
                "type": "component",
                "componentType": "button",
                "id": "normal",
                "label": "Normal",
                "action": "showNormalNotes"
              },
              {
                "type": "component",
                "componentType": "button",
                "id": "critical",
                "label": "Critical",
                "action": "showCriticalNotes"
              },
              {
                "type": "component",
                "componentType": "input",
                "id": "monthInput",
                "label": "Month Filter",
                "attributes": {
                  "type": "month",
                  "name": "monthInput"
                }
              }
            ]
          }
        }
      }
    }
  };

