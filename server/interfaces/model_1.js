export const model1 = {
    
    panels: [
        {
            element: 'section',
            classElement: ['panel_style_1'],
            components: [
                {
                    type: 'textarea',
                    classElement: ['textarea'],
                    placeHolder: 'Text here',
                },
                {
                    type: 'boton',
                    classElement: ['button'],
                    content: 'Press here'
                },
                {
                    type: 'label',
                    classElement: ['label'],
                    atributte: [
                        
                    ],
                    content: 'Tipo de nota',
                },
                {
                    type: 'select',
                    classElement: ['select'],
                    position: '0,0',
                    components: [
                        {
                            type: 'options',
                            classElement: ['option'],
                            content: 'Normal'
                        },
                        {
                            type: 'options',
                            classElement: ['option'],
                            content: 'Critica'
                        }
                        
                    ]
                }

            ]
        }
    ],
 
};

