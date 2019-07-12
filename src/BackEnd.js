export function getData(op = "get", fields = [], conditions = {}, options = {}, keepAlive = false) {
    // return new Promise((resolve, reject) => {
    //     var reqUrl = `http://localhost:8082/`;
    //     var dbRequest = {
    //         op: op,
    //         host: 'localhost',
    //         username: 'root',
    //         //password: '0f6fNF9D5Mqf0KTW',
    //         password: 'hcet',
    //         db: "lamp_light",
    //         table: "movies",
    //         fields: fields,
    //         conditions: conditions,
    //         options: options
    //     };
    //     // var dbRequest = {
    //     //     host: '192.168.21.51',
    //     //     username: 'root',
    //     //     password: 'hcet',
    //     //     db: "accounting_state_static",
    //     //     table: "client",
    //     //     op: op,
    //     //     fields: fields,
    //     //     conditions: conditions,
    //     //     options: options
    //     // };
    //     var req = new Request(reqUrl, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         mode: "cors",
    //         body: JSON.stringify(dbRequest),
    //         keepalive: keepAlive
    //     });

    //     fetch(req)
    //         .then(response => response.json())
    //         .then(val => {
    //             if (val) {
    //                 var rows = [];
    //                 var columns = [];
    //                 rows = unescapeValues(val);
    //                 var cols = [];
    //                 for (var field in val[0]) {
    //                     cols.push(field);
    //                 }
    //                 columns = cols;
    //                 resolve({ rows: rows, columns: columns });
    //             }
    //             else reject("No response from server.");
    //         });
    // })

    return new Promise((resolve, reject) => {
        var request = {
            op: op,
            host: 'localhost',
            username: 'root',
            //password: '0f6fNF9D5Mqf0KTW',
            password: 'hcet',
            db: "lamp_light",
            table: "movies",
            fields: fields,
            conditions: conditions,
            options: options
        }
        doPost(request, false).then((result) => {
            var rows = [];
            var columns = [];
            rows = result;
            var cols = [];
            // if (result && typeof result == 'object' && result[0]) {
            for (var field in result[0]) {
                cols.push(field);
            }
            columns = cols;
            // }

            resolve({ rows: rows, columns: columns });
        })
    })
}

export function scanFolder(folder = "", filter = [], recursive = true, keepAlive = true) {
    return new Promise((resolve, reject) => {
        var request = {
            op: "scan",
            folder: folder,
            filter: filter,
            recursive: recursive,
            host: 'localhost',
            username: 'root',
            //password: '0f6fNF9D5Mqf0KTW',
            password: 'hcet',
            db: "lamp_light",
            table: "movies",
        }
        doPost(request, true).then((result) => {
            resolve(result);
        })
    })
}

function doPost(request = {}, keepAlive = false) {
    return new Promise((resolve, reject) => {
        var reqUrl = `http://localhost:8082/`;
        var req = new Request(reqUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(request)
            //keepalive: keepAlive
        });
        fetch(req)
            .then(response => response.json())
            .then(val => {
                if (val) resolve(val);
                else reject("No response from server.");
            })
            .catch((err) => resolve());
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