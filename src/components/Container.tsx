import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => (
  <div className="xl:w-3/5 lg:w-4/5 w-11/12 mx-auto">{children}</div>
)

export default Container
