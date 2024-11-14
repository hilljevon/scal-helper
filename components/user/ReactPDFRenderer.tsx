"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 24 }, // Tailwind's `p-6`
    section: { marginBottom: 12 }, // Tailwind's `mb-3`
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 }, // Tailwind's `text-xl font-bold mb-2`
    text: { fontSize: 14, marginBottom: 6 }, // Tailwind's `text-base mb-1.5`
});
const ReactPDFRenderer = () => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Patient Information</Text>
                <Text style={styles.text}>ID: </Text>
                <Text style={styles.text}>Name: </Text>
                <Text style={styles.text}>Date of Birth:</Text>
                <Text style={styles.text}>Hospital: </Text>
                <Text style={styles.text}>Admission Date: </Text>
                {/* Additional fields here */}
            </View>
        </Page>
    </Document>
);

export default ReactPDFRenderer;