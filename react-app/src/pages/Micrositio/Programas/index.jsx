import Header from "../components/Header";
import Accordion from "./Components/Accordion";
import Main from "../components/Main";
import { useEscuelasInfo } from "../../../hooks/useEscuelasInfo";

export default function Programas() {
  const { escuelas, loading } = useEscuelasInfo();

  return (
    <div className="w-5/6 flex flex-col relative h-screen">
      <Header></Header>
      <Main>
        <div className="space-y-4">
          {escuelas.map((escuela) => {
            return (
              <Accordion
                header={
                  <h2 className="font-timesnr text-4xl">{escuela.escuela}</h2>
                }
                style={"bg-white shadow-md"}
                key={escuela.escuela}
                arrowColor={"#000"}
              >
                {escuela.puesto_escuelas.length > 0 && (
                  <div className="bg-headerbg p-8 rounded-lg">
                    <table className="w-4/5">
                      <tbody>
                        {escuela?.puesto_escuelas?.map((puesto) => {
                          return (
                            <tr key={puesto.id} className="text-sm font-light">
                              <td className="font-medium">{puesto.puesto}</td>
                              <td>
                                {puesto.usuario?.titulo} {puesto.usuario.nombre}
                              </td>
                              <td>
                                {
                                  puesto.usuario?.email && <span className="flex items-center">
                                  <svg className="mr-1.5" id="Layer_1" enable-background="new 0 0 512 512" width="15" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m443.6 62h-375.2c-37.7 0-68.4 30.7-68.4 68.4v251.1c0 37.8 30.7 68.5 68.4 68.5h375.1c37.7 0 68.4-30.7 68.4-68.4v-251.2c.1-37.7-30.6-68.4-68.3-68.4zm0 32c5.7 0 11 1.3 15.8 3.6l-203.4 203.4-203.4-203.4c4.8-2.3 10.1-3.6 15.8-3.6zm36.4 287.6c0 20.1-16.3 36.4-36.4 36.4h-375.2c-20.1 0-36.4-16.3-36.4-36.4v-251.2c0-2.5.3-5 .8-7.4l211.9 211.9c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l211.9-211.9c.5 2.4.8 4.9.8 7.4z"/></svg>
                                  {puesto.usuario.email}
                                </span>
                                }
                              </td>
                              <td>
                                {
                                  puesto.usuario?.extension &&<span className="flex items-center">
                                  <svg className="mr-1.5" id="Layer_1" width="15" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m11.16 59.25h-6.99c-1.28 0-2.32-1.04-2.32-2.32v-49.07c0-1.28 1.04-2.32 2.32-2.32h6.99c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32h-4.67v44.43h4.67c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g><g><path d="m59.83 59.25h-31.46c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h29.14v-44.43h-29.14c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h31.46c1.28 0 2.32 1.04 2.32 2.32v49.07c0 1.28-1.04 2.32-2.32 2.32z"/></g><g><path d="m25.76 64h-12c-2.72 0-4.93-2.21-4.93-4.93v-54.14c.01-2.72 2.22-4.93 4.94-4.93h12c2.72 0 4.93 2.21 4.93 4.93v54.14c-.01 2.72-2.22 4.93-4.94 4.93zm-11.99-59.36c-.16 0-.29.13-.29.29v54.14c0 .16.13.29.29.29h12c.16 0 .29-.13.29-.29v-54.14c0-.16-.13-.29-.29-.29z"/></g><g><path d="m53.23 20.42h-18.25c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h18.25c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g><g><g><g><path d="m39.81 33.92h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g><g><path d="m52.7 33.92h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g></g><g><g><path d="m39.81 42.18h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32 0 1.29-1.04 2.32-2.32 2.32z"/></g><g><path d="m52.7 42.18h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32 0 1.29-1.04 2.32-2.32 2.32z"/></g></g><g><g><path d="m39.81 50.45h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g><g><path d="m52.7 50.45h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g></g></g></g></svg>
                                  {puesto.usuario?.extension}
                                </span>
                                }
                              </td>
                              <td>
                                {
                                  puesto.usuario?.telefono && <span className="flex items-center justify-start">
                                  <svg id="Layer_1" height="15" className="mr-1.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m437.018 74.98c-48.353-48.352-112.64-74.98-181.02-74.98-.004 0 .002 0-.002 0-68.374 0-132.666 26.631-181.016 74.98-48.351 48.352-74.98 112.639-74.98 181.02.002 43.529 11.08 86.312 32.092 124.152l-31.538 112.808c-1.458 5.217.01 10.815 3.84 14.645s9.426 5.297 14.646 3.84l112.811-31.539c37.836 21.015 80.617 32.093 124.148 32.094 68.381 0 132.668-26.629 181.021-74.981s74.98-112.64 74.98-181.02c-.002-68.381-26.632-132.667-74.982-181.019zm-181.02 407.02c-40.346-.001-79.949-10.773-114.531-31.151-2.329-1.373-4.961-2.077-7.615-2.077-1.354 0-2.712.183-4.039.554l-93.194 26.054 26.054-93.191c1.099-3.93.549-8.137-1.522-11.653-20.378-34.587-31.149-74.193-31.151-114.537 0-60.367 23.508-117.12 66.194-159.806s99.439-66.193 159.804-66.193c124.614 0 225.998 101.383 226.002 225.999 0 124.617-101.384 226.001-226.002 226.001z"/><path d="m366.507 275.182c-9.169-9.17-21.396-14.22-34.428-14.22s-25.258 5.05-34.425 14.219l-6.954 6.953c-1.715 1.714-4.02 2.659-6.489 2.659-2.471 0-4.776-.945-6.494-2.663l-47.873-47.872c-1.715-1.714-2.659-4.02-2.66-6.491 0-2.471.943-4.775 2.656-6.488l6.956-6.955c18.983-18.983 18.983-49.871.001-68.854l-13.911-13.915c-9.171-9.167-21.397-14.214-34.428-14.214s-25.257 5.048-34.427 14.218l-10.372 10.374c-21.929 21.929-29.889 54.585-22.416 91.955 7.033 35.164 27.136 70.762 56.607 100.236 37.139 37.135 84.439 59.307 126.53 59.31h.008c26.521 0 49.226-8.684 65.655-25.113l10.373-10.373c18.983-18.983 18.983-49.873 0-68.858zm-7.303 61.553-10.373 10.373c-10.682 10.681-26.048 16.326-44.442 16.326-.001 0-.005 0-.005 0-34.312-.002-73.684-18.889-105.319-50.522-25.33-25.332-42.52-55.486-48.403-84.907-5.443-27.217-.396-50.25 14.212-64.859l10.371-10.373c3.503-3.502 8.195-5.431 13.214-5.431 5.021 0 9.715 1.929 13.216 5.429l13.909 13.912c7.286 7.287 7.286 19.142.001 26.428l-6.956 6.955c-7.381 7.38-11.445 17.22-11.444 27.706.001 10.484 4.067 20.323 11.447 27.702l47.873 47.871c7.382 7.384 17.222 11.45 27.707 11.45 10.483 0 20.321-4.065 27.701-11.445l6.955-6.954c3.502-3.503 8.194-5.432 13.212-5.432 5.019 0 9.711 1.929 13.215 5.433l13.909 13.909c7.286 7.285 7.287 19.142 0 26.429z"/></g></svg>
                                  {puesto.usuario?.telefono}
                                </span>
                                }
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {escuela?.programas?.map((programa) => {
                  return (
                    <Accordion
                      key={programa.programa}
                      style={"bg-bgsecondary"}
                      arrowColor={"#B9975B"}
                      header={
                        <span className="font-timesnr">
                          <h3 className="text-secondary text-3xl">
                            {programa.programa}
                          </h3>
                          <h4 className="text-primary text-xl">
                            {programa.codigo}
                          </h4>
                        </span>
                      }
                    >
                        <div className="space-x-8 text-base font-light flex border-b border-secondary pb-2">
                          <span className="flex items-center">
                            <svg className="mr-1.5" xmlns="http://www.w3.org/2000/svg" height={15} viewBox="0 0 512 512" xmlSpace="preserve" > <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715m-194.227-92.34a16 16 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60" /> <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75m0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45" /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> </svg>
                            {programa.campus}
                          </span>
                          <span className="flex items-center">
                            <svg className="mr-1.5" xmlSpace="preserve" width={15} height={15} viewBox="0 0 682.667 682.667" xmlns="http://www.w3.org/2000/svg"> <defs> <clipPath clipPathUnits="userSpaceOnUse" id="a"> <path d="M0 512h512V0H0Z" /> </clipPath> </defs> <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"> <path d="M0 0h-236v39.333c0 65.17 52.831 118 118 118H78.667C100.391 157.333 118 139.724 118 118s-17.609-39.333-39.333-39.333H-.666Z" style={{ fill: "none", stroke: "#000", strokeWidth: 40, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeDasharray: "none", strokeOpacity: 1, }} transform="translate(295.333 20)" /> <path d="M0 0c0-43.446-35.221-78.667-78.667-78.667S-157.333-43.446-157.333 0s35.22 78.667 78.666 78.667S0 43.446 0 0" style={{ fill: "none", stroke: "#000", strokeWidth: 40, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeDasharray: "none", strokeOpacity: 1, }} transform="translate(256 256)" /> <path d="M0 0h78.667v353.891h-471.333V0h68.723" style={{ fill: "none", stroke: "#000", strokeWidth: 40, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeDasharray: "none", strokeOpacity: 1, }} transform="translate(413.333 138)" /> <path d="M0 0h-78.666" style={{ fill: "none", stroke: "#000", strokeWidth: 40, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeDasharray: "none", strokeOpacity: 1, }} transform="translate(413.333 334.667)" /> <path d="M0 0h-314.666" style={{ fill: "none", stroke: "#000", strokeWidth: 40, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, strokeDasharray: "none", strokeOpacity: 1, }} transform="translate(413.333 413.333)" /> </g> </svg>
                            {programa.modalidad}</span>
                          <span className="flex items-center">
                              <svg className="mr-1.5" id="svg8"  viewBox="0 0 11.641705 8.4667757" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="layer2" transform="translate(182.298 -2.381)"><path id="path2180" d="m-668.02344 8.9980469a1.0000987 1.0000987 0 0 0 -.42187.1035156l-20.00391 10.0019535a1.0000987 1.0000987 0 0 0 0 1.787109l6.45117 3.226563v9.884765c0 1.270834.54142 2.42066 1.38867 3.314453.84722.893795 1.98202 1.57235 3.29102 2.109375 2.61797 1.074044 5.96385 1.572266 9.31641 1.572266 3.35259 0 6.6984-.498222 9.3164-1.572266 1.30897-.537025 2.44376-1.21558 3.29102-2.109375.84726-.893793 1.39648-2.043619 1.39648-3.314453v-9.888672l4.99805-2.5v8.572266c-1.15742.417172-2.00195 1.518178-2.00195 2.810547 0 1.644995 1.36085 3.005839 3.00586 3.005859 1.64504.000011 2.99609-1.360843 2.99609-3.005859 0-1.294541-.84153-2.396965-2-2.8125v-10.185547h-.004a1.0000987 1.0000987 0 0 0 -.55078-.894531l-19.996-10.0019535a1.0000987 1.0000987 0 0 0 -.47266-.1035156zm.0215 2.1191411 17.76757 8.880859-17.76757 8.886719-17.76172-8.886719zm12.00194 13.998046v8.886719c0 .729167-.2652 1.327387-.83984 1.933594s-1.47112 1.175695-2.59961 1.638672c-2.25702.925953-5.41506 1.423828-8.5625 1.423828s-6.29767-.497875-8.55469-1.423828c-1.12849-.462977-2.02497-1.032465-2.59961-1.638672s-.8418-1.204427-.8418-1.933594v-8.884765l11.55274 5.77539a1.0000987 1.0000987 0 0 0 .89453 0zm-21.50195 5.88086v2.251953c0 1.921702 1.57638 3.498047 3.49804 3.498047h2v-2h-2c-.84824 0-1.49804-.64975-1.49804-1.498047v-2.251953zm29.50586 1.003906c.56413-.000004.99609.431962.99609.996094 0 .564131-.43196 1.005863-.99609 1.005859-.56414-.000007-1.00391-.441736-1.00391-1.005859 0-.564124.43977-.996087 1.00391-.996094z" transform="scale(.265)" font-variant-ligatures="normal" font-variant-position="normal" font-variant-caps="normal" font-variant-numeric="normal" font-variant-alternates="normal" font-variant-east-asian="normal" font-feature-settings="normal" font-variation-settings="normal" text-indent="0" text-align="start" text-decoration-line="none" text-decoration-style="solid" text-decoration-color="#000000" text-transform="none" text-orientation="mixed" white-space="normal" shape-padding="0" shape-margin="0" inline-size="0" isolation="auto" mix-blend-mode="normal" solid-color="#000000" solid-opacity="1" vector-effect="none"/></g></svg>
                              {programa.tipo}
                          </span>
                          <span className="flex items-center">
                            <svg id="regular" className="mr-1.5" height="15" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.5 0c-1.4 0-2.7.7-3.5 1.8-1.3-.5-2.6-.8-4-.8s-2.7.3-4 .8c-.8-1.1-2.1-1.8-3.5-1.8-2.5 0-4.5 2-4.5 4.5 0 1.4.7 2.7 1.8 3.5-.5 1.3-.8 2.6-.8 4 0 3.3 1.5 6.2 3.7 8.2l-2.5 2.5c-.2.3-.2.8.1 1.1.1.1.3.2.5.2s.4-.1.5-.2l2.6-2.6c1.8 1.1 3.9 1.8 6.1 1.8s4.3-.7 6.1-1.8l2.6 2.6c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-2.5-2.5c2.3-2 3.7-5 3.7-8.2 0-1.4-.3-2.7-.8-4 1.2-.8 1.9-2.1 1.9-3.5 0-2.5-2-4.5-4.5-4.5zm-18 4.5c0-1.6 1.3-3 3-3 .8 0 1.6.3 2.1.9-1.8 1-3.2 2.5-4.2 4.2-.6-.5-.9-1.3-.9-2.1zm10.5 17c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zm9.6-14.9c-1-1.8-2.5-3.2-4.2-4.2.6-.6 1.3-.9 2.1-.9 1.6 0 3 1.3 3 3 0 .8-.3 1.6-.9 2.1z"/><path d="m12.8 11.7v-6.4c0-.4-.3-.8-.8-.8s-.8.3-.8.8v6.7c0 .2.1.4.2.5l4.2 4.2c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1z"/></svg>
                            {programa.duracion} meses</span>
                          <span className="flex items-center">
                            <svg viewBox="-32 0 512 512" className="mr-1.5" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m446.148438 426.023438-51.152344-102.308594c3.339844-3.648438 6.324218-7.667969 8.832031-12.015625 9.625-16.671875 11.753906-36.898438 6.355469-53.976563 13.210937-12.089844 21.480468-30.667968 21.480468-49.921875 0-19.253906-8.269531-37.832031-21.480468-49.921875 5.398437-17.078125 3.269531-37.308594-6.355469-53.976562-9.621094-16.667969-26.074219-28.625-43.566406-32.496094-3.863281-17.488281-15.824219-33.945312-32.492188-43.566406-16.664062-9.625-36.898437-11.753906-53.980469-6.351563-12.09375-13.214843-30.675781-21.488281-49.921874-21.488281-19.246094 0-37.828126 8.273438-49.917969 21.488281-17.082031-5.398437-37.316407-3.273437-53.984375 6.351563-16.667969 9.625-28.625 26.082031-32.488282 43.570312-17.488281 3.867188-33.945312 15.828125-43.566406 32.492188-9.621094 16.667968-11.75 36.898437-6.355468 53.976562-13.21875 12.089844-21.488282 30.671875-21.488282 49.921875s8.269532 37.832031 21.484375 49.921875c-5.394531 17.078125-3.265625 37.304688 6.359375 53.976563 2.507813 4.347656 5.492188 8.367187 8.832032 12.015625l-51.160157 102.308594c-2.324219 4.652343-2.074219 10.171874.65625 14.59375 2.734375 4.421874 7.5625 7.117187 12.761719 7.117187h72.832031l43.699219 58.265625c2.851562 3.796875 7.304688 6 12 6 6.210938 0 11.125-3.710938 13.417969-8.292969l45.734375-91.464843c6.757812 2.179687 13.921875 3.359374 21.183594 3.359374 7.261718 0 14.425781-1.179687 21.1875-3.359374l45.726562 91.464843c2.296875 4.59375 7.207031 8.292969 13.417969 8.292969 4.695312 0 9.152343-2.203125 12-6l43.699219-58.269531h72.832031c5.199219 0 10.027343-2.691407 12.761719-7.113281 2.734374-4.421876 2.980468-9.941407.65625-14.59375zm-305.175782 42.5625-33.640625-44.851563c-2.832031-3.777344-7.277343-6-12-6h-56.0625l38.320313-76.632813c3.230468 1.308594 6.539062 2.347657 9.886718 3.089844 3.863282 17.488282 15.816407 33.945313 32.488282 43.574219 16.667968 9.621094 36.898437 11.746094 53.980468 6.347656.90625.988281 1.855469 1.9375 2.828126 2.867188zm51.292969-100.101563c-2.832031-5.449219-11.917969-11.75-21.367187-5.726563-7.835938 4.996094-22.425782 6.820313-35.929688-.976562-13.507812-7.800781-19.222656-21.339844-18.8125-30.621094.390625-8.828125-6.894531-16.03125-15.636719-15.644531-9.296875.410156-22.832031-5.3125-30.628906-18.816406-7.800781-13.511719-5.980469-28.097657-.984375-35.929688 4.734375-7.429687 2.070312-17.320312-5.730469-21.375-8.242187-4.28125-17.109375-15.996093-17.109375-31.59375 0-15.601562 8.867188-27.316406 17.109375-31.597656 7.816407-4.0625 10.457031-13.957031 5.730469-21.375-4.992188-7.832031-6.8125-22.417969.984375-35.929687 7.796875-13.503907 21.339844-19.222657 30.628906-18.8125 8.792969.378906 16.023438-6.863282 15.636719-15.648438-.410156-9.28125 5.304688-22.820312 18.808594-30.621094 13.507812-7.796875 28.097656-5.972656 35.933594-.976562 7.410156 4.722656 17.300781 2.089844 21.367187-5.726563 4.289063-8.242187 16.007813-17.113281 31.601563-17.113281 15.597656 0 27.316406 8.871094 31.605468 17.117188 4.058594 7.800781 13.945313 10.453124 21.371094 5.726562 7.835938-5 22.421875-6.824219 35.921875.972656 13.511719 7.800782 19.226563 21.339844 18.816406 30.621094-.390625 8.796875 6.851563 16.027344 15.636719 15.648438 9.28125-.394532 22.832031 5.308593 30.628906 18.8125 7.800782 13.511718 5.976563 28.09375.980469 35.925781-4.730469 7.414062-2.09375 17.316406 5.730469 21.378906 8.238281 4.28125 17.105468 15.992187 17.105468 31.597656 0 15.601563-8.867187 27.3125-17.105468 31.59375-7.808594 4.054688-10.472656 13.953125-5.730469 21.378907 4.996094 7.832031 6.820313 22.414062-.980469 35.925781-7.796875 13.503906-21.34375 19.210937-30.628906 18.816406-8.804688-.382813-16.023438 6.871094-15.636719 15.644531.40625 9.28125-5.304687 22.820313-18.816406 30.625-13.503906 7.792969-28.085937 5.96875-35.921875.972656-7.425781-4.734374-17.3125-2.074218-21.371094 5.726563-4.289062 8.246094-16.011718 17.117187-31.605468 17.117187s-27.3125-8.875-31.601563-17.117187zm160.132813 49.25c-4.722657 0-9.167969 2.222656-12 6l-33.636719 44.847656-35.796875-71.601562c.972656-.929688 1.921875-1.878907 2.824218-2.867188 17.082032 5.398438 37.3125 3.273438 53.976563-6.347656 16.671875-9.625 28.632813-26.082031 32.496094-43.574219 3.347656-.738281 6.65625-1.78125 9.886719-3.089844l38.3125 76.632813zm0 0"/><path d="m351.332031 207.800781c0-70.285156-57.179687-127.464843-127.464843-127.464843-70.285157 0-127.46875 57.179687-127.46875 127.464843 0 70.285157 57.183593 127.464844 127.46875 127.464844 70.285156 0 127.464843-57.179687 127.464843-127.464844zm-127.464843 97.464844c-53.746094 0-97.46875-43.722656-97.46875-97.464844 0-53.742187 43.722656-97.464843 97.46875-97.464843 53.742187 0 97.464843 43.722656 97.464843 97.464843 0 53.742188-43.722656 97.464844-97.464843 97.464844zm0 0"/><path d="m281.273438 163.824219c-6.539063-5.085938-15.964844-3.90625-21.046876 2.632812l-45.800781 58.886719-28.152343-28.152344c-5.859376-5.855468-15.355469-5.855468-21.214844 0-5.859375 5.859375-5.859375 15.355469 0 21.214844l40.167968 40.167969c6.417969 6.417969 16.945313 5.679687 22.445313-1.398438l56.234375-72.300781c5.085938-6.539062 3.90625-15.964844-2.632812-21.050781zm0 0"/></svg>
                            {programa.rvoe}
                          </span>
                        </div>
                        <table className="mt-6 w-4/5">
                          <tbody>
                            {programa?.puesto_programas?.map((puesto) => {
                              return (
                                <tr
                                  key={puesto.id}
                                  className="text-sm font-light"
                                >
                                  <td className="font-medium text-primary">
                                    {puesto.puesto}
                                  </td>
                                  <td>
                                    {puesto.usuario?.titulo}{" "}
                                    {puesto.usuario.nombre}
                                  </td>
                                  <td>
                                    {
                                      puesto.usuario?.email &&
                                      <span className="flex items-center">
                                        <svg className="mr-1.5" id="Layer_1" enable-background="new 0 0 512 512" width="15" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m443.6 62h-375.2c-37.7 0-68.4 30.7-68.4 68.4v251.1c0 37.8 30.7 68.5 68.4 68.5h375.1c37.7 0 68.4-30.7 68.4-68.4v-251.2c.1-37.7-30.6-68.4-68.3-68.4zm0 32c5.7 0 11 1.3 15.8 3.6l-203.4 203.4-203.4-203.4c4.8-2.3 10.1-3.6 15.8-3.6zm36.4 287.6c0 20.1-16.3 36.4-36.4 36.4h-375.2c-20.1 0-36.4-16.3-36.4-36.4v-251.2c0-2.5.3-5 .8-7.4l211.9 211.9c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l211.9-211.9c.5 2.4.8 4.9.8 7.4z"/></svg>
                                        {puesto.usuario.email}
                                      </span>
                                    }
                                  </td>
                                  <td>
                                    {
                                      puesto.usuario?.extension &&
                                      <span className="flex items-center">
                                        <svg className="mr-1.5" id="Layer_1" width="15" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m11.16 59.25h-6.99c-1.28 0-2.32-1.04-2.32-2.32v-49.07c0-1.28 1.04-2.32 2.32-2.32h6.99c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32h-4.67v44.43h4.67c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g><g><path d="m59.83 59.25h-31.46c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h29.14v-44.43h-29.14c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h31.46c1.28 0 2.32 1.04 2.32 2.32v49.07c0 1.28-1.04 2.32-2.32 2.32z"/></g><g><path d="m25.76 64h-12c-2.72 0-4.93-2.21-4.93-4.93v-54.14c.01-2.72 2.22-4.93 4.94-4.93h12c2.72 0 4.93 2.21 4.93 4.93v54.14c-.01 2.72-2.22 4.93-4.94 4.93zm-11.99-59.36c-.16 0-.29.13-.29.29v54.14c0 .16.13.29.29.29h12c.16 0 .29-.13.29-.29v-54.14c0-.16-.13-.29-.29-.29z"/></g><g><path d="m53.23 20.42h-18.25c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h18.25c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g><g><g><g><path d="m39.81 33.92h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g><g><path d="m52.7 33.92h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g></g><g><g><path d="m39.81 42.18h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32 0 1.29-1.04 2.32-2.32 2.32z"/></g><g><path d="m52.7 42.18h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32 0 1.29-1.04 2.32-2.32 2.32z"/></g></g><g><g><path d="m39.81 50.45h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g><g><path d="m52.7 50.45h-4.3c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32h4.3c1.28 0 2.32 1.04 2.32 2.32s-1.04 2.32-2.32 2.32z"/></g></g></g></g></svg>
                                        {puesto.usuario?.extension}
                                      </span>
                                    }
                                  </td>
                                  <td>
                                    {
                                      puesto.usuario?.telefono && 
                                      <span className="flex items-center justify-start">
                                        <svg id="Layer_1" height="15" className="mr-1.5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m437.018 74.98c-48.353-48.352-112.64-74.98-181.02-74.98-.004 0 .002 0-.002 0-68.374 0-132.666 26.631-181.016 74.98-48.351 48.352-74.98 112.639-74.98 181.02.002 43.529 11.08 86.312 32.092 124.152l-31.538 112.808c-1.458 5.217.01 10.815 3.84 14.645s9.426 5.297 14.646 3.84l112.811-31.539c37.836 21.015 80.617 32.093 124.148 32.094 68.381 0 132.668-26.629 181.021-74.981s74.98-112.64 74.98-181.02c-.002-68.381-26.632-132.667-74.982-181.019zm-181.02 407.02c-40.346-.001-79.949-10.773-114.531-31.151-2.329-1.373-4.961-2.077-7.615-2.077-1.354 0-2.712.183-4.039.554l-93.194 26.054 26.054-93.191c1.099-3.93.549-8.137-1.522-11.653-20.378-34.587-31.149-74.193-31.151-114.537 0-60.367 23.508-117.12 66.194-159.806s99.439-66.193 159.804-66.193c124.614 0 225.998 101.383 226.002 225.999 0 124.617-101.384 226.001-226.002 226.001z"/><path d="m366.507 275.182c-9.169-9.17-21.396-14.22-34.428-14.22s-25.258 5.05-34.425 14.219l-6.954 6.953c-1.715 1.714-4.02 2.659-6.489 2.659-2.471 0-4.776-.945-6.494-2.663l-47.873-47.872c-1.715-1.714-2.659-4.02-2.66-6.491 0-2.471.943-4.775 2.656-6.488l6.956-6.955c18.983-18.983 18.983-49.871.001-68.854l-13.911-13.915c-9.171-9.167-21.397-14.214-34.428-14.214s-25.257 5.048-34.427 14.218l-10.372 10.374c-21.929 21.929-29.889 54.585-22.416 91.955 7.033 35.164 27.136 70.762 56.607 100.236 37.139 37.135 84.439 59.307 126.53 59.31h.008c26.521 0 49.226-8.684 65.655-25.113l10.373-10.373c18.983-18.983 18.983-49.873 0-68.858zm-7.303 61.553-10.373 10.373c-10.682 10.681-26.048 16.326-44.442 16.326-.001 0-.005 0-.005 0-34.312-.002-73.684-18.889-105.319-50.522-25.33-25.332-42.52-55.486-48.403-84.907-5.443-27.217-.396-50.25 14.212-64.859l10.371-10.373c3.503-3.502 8.195-5.431 13.214-5.431 5.021 0 9.715 1.929 13.216 5.429l13.909 13.912c7.286 7.287 7.286 19.142.001 26.428l-6.956 6.955c-7.381 7.38-11.445 17.22-11.444 27.706.001 10.484 4.067 20.323 11.447 27.702l47.873 47.871c7.382 7.384 17.222 11.45 27.707 11.45 10.483 0 20.321-4.065 27.701-11.445l6.955-6.954c3.502-3.503 8.194-5.432 13.212-5.432 5.019 0 9.711 1.929 13.215 5.433l13.909 13.909c7.286 7.285 7.287 19.142 0 26.429z"/></g></svg>
                                        {puesto.usuario?.telefono}
                                      </span>
                                    }
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div className="space-x-4 mt-[46px!important] flex">
                          <a className="text-white bg-primary px-3.5 py-2 rounded-full cursor-pointer flex items-center" target="blank" href={programa.website}>
                            <svg className="mr-1.5" id="Capa_1" fill="white" enable-background="new 0 0 515.283 515.283" height="15" viewBox="0 0 515.283 515.283" xmlns="http://www.w3.org/2000/svg"><g><g><g><g><path d="m372.149 515.283h-286.268c-22.941 0-44.507-8.934-60.727-25.155s-25.153-37.788-25.153-60.726v-286.268c0-22.94 8.934-44.506 25.154-60.726s37.786-25.154 60.727-25.154h114.507c15.811 0 28.627 12.816 28.627 28.627s-12.816 28.627-28.627 28.627h-114.508c-7.647 0-14.835 2.978-20.241 8.384s-8.385 12.595-8.385 20.242v286.268c0 7.647 2.978 14.835 8.385 20.243 5.406 5.405 12.594 8.384 20.241 8.384h286.267c7.647 0 14.835-2.978 20.242-8.386 5.406-5.406 8.384-12.595 8.384-20.242v-114.506c0-15.811 12.817-28.626 28.628-28.626s28.628 12.816 28.628 28.626v114.507c0 22.94-8.934 44.505-25.155 60.727-16.221 16.22-37.788 25.154-60.726 25.154zm-171.76-171.762c-7.327 0-14.653-2.794-20.242-8.384-11.179-11.179-11.179-29.306 0-40.485l237.397-237.398h-102.648c-15.811 0-28.626-12.816-28.626-28.627s12.815-28.627 28.626-28.627h171.761c3.959 0 7.73.804 11.16 2.257 3.201 1.354 6.207 3.316 8.837 5.887.001.001.001.001.002.002.019.019.038.037.056.056.005.005.012.011.017.016.014.014.03.029.044.044.01.01.019.019.029.029.011.011.023.023.032.032.02.02.042.041.062.062.02.02.042.042.062.062.011.01.023.023.031.032.011.01.019.019.029.029.016.015.03.029.044.045.005.004.012.011.016.016.019.019.038.038.056.057 0 .001.001.001.002.002 2.57 2.632 4.533 5.638 5.886 8.838 1.453 3.43 2.258 7.2 2.258 11.16v171.761c0 15.811-12.817 28.627-28.628 28.627s-28.626-12.816-28.626-28.627v-102.648l-237.4 237.399c-5.585 5.59-12.911 8.383-20.237 8.383z" fill="white"/></g></g></g></g></svg>
                            Website
                          </a>
                          <a className="text-white bg-primary px-3.5 py-2 rounded-full cursor-pointer flex items-center" target="blank" href={programa.encarte}>
                            <svg className="mr-1.5" id="Capa_1" fill="white" enable-background="new 0 0 515.283 515.283" height="15" viewBox="0 0 515.283 515.283" xmlns="http://www.w3.org/2000/svg"><g><g><g><g><path d="m372.149 515.283h-286.268c-22.941 0-44.507-8.934-60.727-25.155s-25.153-37.788-25.153-60.726v-286.268c0-22.94 8.934-44.506 25.154-60.726s37.786-25.154 60.727-25.154h114.507c15.811 0 28.627 12.816 28.627 28.627s-12.816 28.627-28.627 28.627h-114.508c-7.647 0-14.835 2.978-20.241 8.384s-8.385 12.595-8.385 20.242v286.268c0 7.647 2.978 14.835 8.385 20.243 5.406 5.405 12.594 8.384 20.241 8.384h286.267c7.647 0 14.835-2.978 20.242-8.386 5.406-5.406 8.384-12.595 8.384-20.242v-114.506c0-15.811 12.817-28.626 28.628-28.626s28.628 12.816 28.628 28.626v114.507c0 22.94-8.934 44.505-25.155 60.727-16.221 16.22-37.788 25.154-60.726 25.154zm-171.76-171.762c-7.327 0-14.653-2.794-20.242-8.384-11.179-11.179-11.179-29.306 0-40.485l237.397-237.398h-102.648c-15.811 0-28.626-12.816-28.626-28.627s12.815-28.627 28.626-28.627h171.761c3.959 0 7.73.804 11.16 2.257 3.201 1.354 6.207 3.316 8.837 5.887.001.001.001.001.002.002.019.019.038.037.056.056.005.005.012.011.017.016.014.014.03.029.044.044.01.01.019.019.029.029.011.011.023.023.032.032.02.02.042.041.062.062.02.02.042.042.062.062.011.01.023.023.031.032.011.01.019.019.029.029.016.015.03.029.044.045.005.004.012.011.016.016.019.019.038.038.056.057 0 .001.001.001.002.002 2.57 2.632 4.533 5.638 5.886 8.838 1.453 3.43 2.258 7.2 2.258 11.16v171.761c0 15.811-12.817 28.627-28.628 28.627s-28.626-12.816-28.626-28.627v-102.648l-237.4 237.399c-5.585 5.59-12.911 8.383-20.237 8.383z" fill="white"/></g></g></g></g></svg>
                            Encarte
                          </a>
                        </div>
                    </Accordion>
                  );
                })}
              </Accordion>
            );
          })}
        </div>
      </Main>
    </div>
  );
}
