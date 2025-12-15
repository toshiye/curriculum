import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 11,
        fontFamily: "Helvetica",
        color: "#111827",
        lineHeight: 1.5,
    },

    header: {
        marginBottom: 28,
    },

    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        lineHeight: 1.2,
    },

    role: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 12,
        lineHeight: 1.4,
    },

    summary: {
        fontSize: 11,
        color: "#374151",
        lineHeight: 1.6,
        maxWidth: 500,
    },

    section: {
        marginBottom: 18,
    },

    sectionTitle: {
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 6,
        borderBottom: "1 solid #E5E7EB",
        paddingBottom: 4,
    },

    itemTitle: {
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 2,
    },

    itemSubtitle: {
        fontSize: 10,
        color: "#6B7280",
        marginBottom: 6,
    },

    bullet: {
        fontSize: 10,
        marginLeft: 12,
        marginBottom: 4,   // ↑ mais espaço
        lineHeight: 1.5,
    },

    skillsGrid: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,              // ↑ espaçamento
    },

    skill: {
        fontSize: 9.5,       // ligeiramente menor
        backgroundColor: "#F3F4F6",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },

    footer: {
        marginTop: 34,
        fontSize: 9,
        color: "#9CA3AF",
        textAlign: "center",
    },
});
