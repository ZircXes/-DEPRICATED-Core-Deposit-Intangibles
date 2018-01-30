export default function formatPercent(inFloat,dig) {
    return (inFloat*100).toFixed(dig) + "%";
}