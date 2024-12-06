'use client'

import {
  Breadcrumbs,
  BreadcrumbItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function App() {
  const router = useRouter()

  return (
    <Breadcrumbs
      // maxItems={3}
      // itemsBeforeCollapse={1}
      // itemsAfterCollapse={2}
      renderEllipsis={({ items, ellipsisIcon, separator }) => (
        <div key="id" className="flex items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button
                isIconOnly
                className="w-6 h-6 min-w-6"
                size="sm"
                variant="flat"
              >
                {ellipsisIcon}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Routes">
              {items.map((item, index) => (
                <DropdownItem key={index} href={item.href}>
                  {item.children}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          {separator}
        </div>
      )}
    >
      <BreadcrumbItem
        href="/test"
        onClick={(event) => event.preventDefault()}
        onPress={() => router.push('/test')}
      >
        Test
      </BreadcrumbItem>
      <BreadcrumbItem href="/example">example</BreadcrumbItem>
      <BreadcrumbItem href="#artist">Artist</BreadcrumbItem>
      {/* <BreadcrumbItem href="#album">Album</BreadcrumbItem>
      <BreadcrumbItem href="#featured">Featured</BreadcrumbItem>
      <BreadcrumbItem href="#song">Song</BreadcrumbItem> */}
    </Breadcrumbs>
  )
}
