interface menuObject {
    label: React.ReactNode,
     key: React.Key,
     icon?: React.ReactNode,
     children?: menuObject[],
     type?: 'group',
}

export const mappingResponseObjToMenuObj = (responseArr : any) : menuObject[]=> {
    const menuObject:menuObject[] = [];
    
    return menuObject;
}