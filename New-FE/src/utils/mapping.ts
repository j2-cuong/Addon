interface menuObject {
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: menuObject[],
    type?: 'group',
}

export const mappingResponseObjToMenuObj = (responseArr : any) : menuObject[]=> {
    const menuObject:menuObject[] = [];
    for (let i = 0; i < responseArr.length; i++) {
        menuObject[i].label = responseArr[i].navName
        menuObject[i].key = responseArr[i].navUrl
        if (responseArr[i].children.length > 0) {
            mappingResponseObjToMenuObj(responseArr[i].children)
        }
    }
    return menuObject;
}