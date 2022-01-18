import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => (
  <main className="xl:w-2/5 lg:w-3/5 w-11/12 mx-auto">{children}</main>
)

export default Container
