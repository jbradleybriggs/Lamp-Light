export function getData(op = "get", fields = [], conditions = {}, options = {}) {
    return new Promise((resolve, reject) => {
        var reqUrl = `http://localhost:8082/`;
        // var dbRequest = {
        //     op: op,
        //     host: 'localhost',
        //     username: 'root',
        //     password: 'hcet',
        //     db: "lamp_light",
        //     table: "movies",
        //     fields: fields,
        //     conditions: conditions
        // };
        var dbRequest = {
            host: '192.168.21.51',
            username: 'root',
            password: 'hcet',
            db: "accounting_state_static",
            table: "client",
            op: op,
            fields: fields,
            conditions: conditions,
            options: options
        };
        var req = new Request(reqUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(dbRequest)
        });

        fetch(req)
            .then(response => response.json())
            .then(val => {
                if (val) {
                    var rows = [];
                    var columns = [];
                    rows = unescapeValues(val);
                    var cols = [];
                    for (var field in val[0]) {
                        cols.push(field);
                    }
                    columns = cols;
                    resolve({ rows: rows, columns: columns });
                }
                else reject("No response from server.");
            });
    })
}

function unescapeValues(obj) {
    var res = [];
    obj.forEach(row => {
        // row here is another object
        var newRow = {};
        if (typeof row == "object") {
            for (var field in row) {
                try {
                    newRow[field] = decodeURI(row[field]);
                    /*if (field == "target") {
                          newRow[field] = `<a href="${newRow[field]}">Watch</a>`;
                        }*/
                } catch (error) {
                    newRow[field] = row[field];
                }
            }
            res.push(newRow);
        }
    });
    return res;
}