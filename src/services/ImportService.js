import Papa from "papaparse";

const defaultCallback = () => {}

export const handleImport = (e, ok, ko) => {
    if (!ok) {
        ok = defaultCallback
    }

    if (!ko) {
        ko = defaultCallback
    }

    const {files} = e.target;

    if (files.length < 1) {
        return;
    }

    for (const file of files) {
        if (file.type !== "text/csv") {
            ko("File type should be: text/csv", file);
            continue;
        }

        ok(file);
    }
}

export const fileToJSON = (file, ok, ko) => {
    if (!ok) {
        ok = defaultCallback
    }

    if (!ko) {
        ko = defaultCallback
    }

    const rows = [];

    Papa.parse(file, {
        worker: true,
        step: (results) => {
            rows.push([
                rows.length === 0 ? "Sync" : 0,
                ...results.data,
            ]);
        },
        complete: (results) => {
            ok(rows)
        }
    });
}
