import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'

//# Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#d11fb6',
    color: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: typeof window !== 'undefined' ? window.innerWidth : 100,
    height: typeof window !== 'undefined' ? window.window.innerHeight : 200,
  },
})

//# Create Document Component
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size='A4' style={styles.page}>
          <View style={styles.section}>
            <Text>Hello</Text>
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
export default BasicDocument
