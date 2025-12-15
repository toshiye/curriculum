import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../app/api/cv/styles";
import { cvContent } from "../lib/cvContent";
import { Link } from "@react-pdf/renderer";


export function CVPdf({ lang }: { lang: "pt" | "en" }) {
    const c = cvContent[lang];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.name}>{c.name}</Text>
                    <Text style={styles.role}>{c.role}</Text>
                    <Text style={styles.summary}>{c.summary}</Text>
                </View>

                {/* EXPERIENCE */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{c.sections.experience}</Text>

                    {c.experience.map((job) => (
                        <View key={job.company} style={{ marginBottom: 10 }}>
                            <Text style={styles.itemTitle}>
                                {job.role}
                            </Text>
                            <Text style={styles.itemSubtitle}>
                                {job.company} • {job.period}
                            </Text>

                            {job.highlights.map((h) => (
                                <Text key={h} style={styles.bullet}>
                                    • {h}
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>

                {/* SKILLS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{c.sections.skills}</Text>
                    <View style={styles.skillsGrid}>
                        {c.skills.map((s) => (
                            <Text key={s} style={styles.skill}>
                                {s}
                            </Text>
                        ))}
                    </View>
                </View>

                {/* FOOTER */}
                <Text style={styles.footer}>
                    Open to remote opportunities worldwide • Fluent English •{" "}
                    <Link src="https://curriculum-zeta-khaki.vercel.app">
                        Online CV
                    </Link>{" "}
                    •{" "}
                    <Link src="https://github.com/toshiye/curriculum">
                        GitHub
                    </Link>
                </Text>
            </Page>
        </Document>
    );
}
