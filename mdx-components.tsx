import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { JSX } from "react";
import type { PluggableList } from "unified";

import FootnoteBackReference from "@/components/footnote/back-reference";
import FootnoteForwardReference from "@/components/footnote/forward-reference";
import Preview from "@/components/preview";
import MDXImage from "@/components/ui/image";
import Link from "@/components/ui/link";
import { cn } from "@/lib/utils";

import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const components: MDXComponents = {
  // PreviewExample: () => {
  //   return (
  //     <div className="min- flex h-10 w-32 items-center justify-center rounded-lg border border-yellow-6 bg-yellow-3 text-yellow-11">
  //       <div className="overflow-x-auto">
  //         <div className="min-w-full">
  //           <div className="min-w-full">
  //             <div className="min-w-full">Showcase</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // },
  // Preview: ({ children, codeblock }) => (
  //   <Preview codeblock={codeblock ? codeblock : undefined}>{children}</Preview>
  // ),
  // Image: ({ caption, alt, ...props }) => (
  //   <MDXImage {...props} caption={caption} alt={alt} />
  // ),
  // h2: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
  //   if (id?.includes("footnote-label")) {
  //     return null;
  //   }
  //   return <h2 id={id}>{children}</h2>;
  // },
  // a: ({ children, href }) => {
  //   if (href?.startsWith("#user-content-fn-")) {
  //     return (
  //       <FootnoteForwardReference href={href}>
  //         {children}
  //       </FootnoteForwardReference>
  //     );
  //   }
  //   return (
  //     <Link
  //       href={href}
  //       className="inline-flex items-center gap-1 text-muted"
  //       underline
  //     >
  //       {children}
  //     </Link>
  //   );
  // },
  // blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  //   <blockquote
  //     className={cn("mt-6 border-gray-4 border-l-2 pl-6 text-muted", className)}
  //     {...props}
  //   />
  // ),
  // table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  //   <div className="my-6 w-full overflow-hidden overflow-y-auto">
  //     <table className={cn("w-full overflow-hidden", className)} {...props} />
  //   </div>
  // ),
  // th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
  //   <th
  //     className={cn(
  //       "border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
  //       className,
  //     )}
  //     {...props}
  //   />
  // ),
  // td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
  //   <td
  //     className={cn(
  //       "border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
  //       className,
  //     )}
  //     {...props}
  //   />
  // ),
  // ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => {
  //   if (
  //     React.Children.toArray(props.children).some(
  //       (child) =>
  //         React.isValidElement(child) &&
  //         (child as React.ReactElement<any>).props.id?.includes(
  //           "user-content-fn-",
  //         ),
  //     )
  //   ) {
  //     return (
  //       <ol data-footnotes>
  //         <div className="mt-6 mb-2 text-muted text-small">Footnotes</div>
  //         {props.children}
  //       </ol>
  //     );
  //   }
  //   return (
  //     <ol className={cn("mt-2 ml-2 list-decimal", className)} {...props} />
  //   );
  // },
  // ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  //   <ul className={cn("mt-2 ml-2 list-disc", className)} {...props} />
  // ),
  // li: ({
  //   className,
  //   children,
  //   ...props
  // }: React.HTMLAttributes<HTMLLIElement>) => {
  //   if (props.id?.includes("user-content-fn-")) {
  //     return (
  //       <li id={props.id}>
  //         {React.Children.map(children, (child, index) => {
  //           if (React.isValidElement(child) && child.props) {
  //             if (child.type === "p") {
  //               let href: string | undefined = undefined;
  //               let filtered: React.ReactNode[] = [];
  //               const propsWithChildren = child.props as {
  //                 children?: React.ReactNode;
  //               };
  //               if (
  //                 propsWithChildren.children &&
  //                 Array.isArray(propsWithChildren.children)
  //               ) {
  //                 href = propsWithChildren.children.find(
  //                   (grandChild: React.ReactNode) => {
  //                     if (
  //                       React.isValidElement(grandChild) &&
  //                       grandChild.props
  //                     ) {
  //                       return (
  //                         (
  //                           grandChild.props as { href?: string }
  //                         ).href?.includes("user-content-fnref-") ?? false
  //                       );
  //                     }
  //                     return false;
  //                   },
  //                 )?.props?.href;
  //                 filtered = propsWithChildren.children.filter(
  //                   (grandChild: React.ReactNode) => {
  //                     if (
  //                       React.isValidElement(grandChild) &&
  //                       grandChild.props
  //                     ) {
  //                       return !(
  //                         (
  //                           grandChild.props as { href?: string }
  //                         ).href?.includes("user-content-fnref-") ?? false
  //                       );
  //                     }
  //                     return true;
  //                   },
  //                 );
  //               } else if (propsWithChildren.children) {
  //                 filtered = React.Children.toArray(propsWithChildren.children);
  //               }
  //               return (
  //                 <FootnoteBackReference
  //                   key={`footnote-${props.id}-${index}`}
  //                   href={href ?? ""}
  //                 >
  //                   {filtered}
  //                 </FootnoteBackReference>
  //               );
  //             }
  //             return React.cloneElement(child as React.ReactElement<any>, {
  //               key: `footnote-child-${index}`,
  //             });
  //           }
  //           return child;
  //         })}
  //       </li>
  //     );
  //   }
  //   return <li className={cn("mt-2 ml-2 list-item", className)}>{children}</li>;
  // },
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: "github-dark",
                  light: "github-light",
                },
                keepBackground: false,
                defaultLang: "tsx",
              },
            ],
          ] as PluggableList,
        },
      }}
    />
  );
}
