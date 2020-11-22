const generatedIds = {};

const uniqId = () => {
    let id = (new Date()).getTime();
    let nb = 0;

    if (id in generatedIds) {
        let nb = generatedIds[id];
        ++nb;

        id += `.${nb}`
    }

    generatedIds[id] = nb;

    return id;
}

export default uniqId;
