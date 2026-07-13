

export const dateFormat = (date: Date) => (
    new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(date)
);
