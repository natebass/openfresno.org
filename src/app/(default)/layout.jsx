import Layout from "@/components/layout/layout.jsx";

/**
 * Default layout for the application.
 * @param children {React.ReactNode} The main page content.
 */
export default function DefaultLayout({ children }) {
  return <Layout>{children}</Layout>;
}
