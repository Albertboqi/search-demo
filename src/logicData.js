export const logicData = `
SELECT
    *
FROM
    customer
WHERE
    (
        (c_first = $1)
        AND (c_middle = $2)
    )
    AND (c_last = $3)
LIMIT
    $4;
`;
