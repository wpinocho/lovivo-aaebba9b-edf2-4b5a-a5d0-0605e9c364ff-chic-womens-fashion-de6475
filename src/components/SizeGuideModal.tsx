import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Ruler } from 'lucide-react';

export const SizeGuideModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Ruler className="h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Size Guide</DialogTitle>
          <DialogDescription>
            Find your perfect fit with our comprehensive sizing information
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Clothing Sizes */}
          <div>
            <h3 className="font-serif text-xl mb-4">Clothing Sizes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Size</th>
                    <th className="text-left py-3 px-4 font-medium">US</th>
                    <th className="text-left py-3 px-4 font-medium">UK</th>
                    <th className="text-left py-3 px-4 font-medium">EU</th>
                    <th className="text-left py-3 px-4 font-medium">Bust (in)</th>
                    <th className="text-left py-3 px-4 font-medium">Waist (in)</th>
                    <th className="text-left py-3 px-4 font-medium">Hip (in)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">XS</td>
                    <td className="py-3 px-4">0-2</td>
                    <td className="py-3 px-4">4-6</td>
                    <td className="py-3 px-4">32-34</td>
                    <td className="py-3 px-4">31-32</td>
                    <td className="py-3 px-4">24-25</td>
                    <td className="py-3 px-4">34-35</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">S</td>
                    <td className="py-3 px-4">4-6</td>
                    <td className="py-3 px-4">8-10</td>
                    <td className="py-3 px-4">36-38</td>
                    <td className="py-3 px-4">33-34</td>
                    <td className="py-3 px-4">26-27</td>
                    <td className="py-3 px-4">36-37</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">M</td>
                    <td className="py-3 px-4">8-10</td>
                    <td className="py-3 px-4">12-14</td>
                    <td className="py-3 px-4">40-42</td>
                    <td className="py-3 px-4">35-36</td>
                    <td className="py-3 px-4">28-29</td>
                    <td className="py-3 px-4">38-39</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">L</td>
                    <td className="py-3 px-4">12-14</td>
                    <td className="py-3 px-4">16-18</td>
                    <td className="py-3 px-4">44-46</td>
                    <td className="py-3 px-4">37-39</td>
                    <td className="py-3 px-4">30-32</td>
                    <td className="py-3 px-4">40-42</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">XL</td>
                    <td className="py-3 px-4">16-18</td>
                    <td className="py-3 px-4">20-22</td>
                    <td className="py-3 px-4">48-50</td>
                    <td className="py-3 px-4">40-42</td>
                    <td className="py-3 px-4">33-35</td>
                    <td className="py-3 px-4">43-45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Measure */}
          <div>
            <h3 className="font-serif text-xl mb-4">How to Measure</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Bust:</strong> Measure around the fullest part of your bust, keeping the tape parallel to the floor.
              </div>
              <div>
                <strong className="text-foreground">Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.
              </div>
              <div>
                <strong className="text-foreground">Hip:</strong> Measure around the fullest part of your hips, approximately 8 inches below your waist.
              </div>
            </div>
          </div>

          {/* Fit Guide */}
          <div>
            <h3 className="font-serif text-xl mb-4">Fit Guide</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-muted/30 rounded">
                <strong className="text-foreground block mb-2">Relaxed Fit</strong>
                <p className="text-muted-foreground">
                  Loose and comfortable with extra room throughout. Perfect for casual, effortless styling.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <strong className="text-foreground block mb-2">Regular Fit</strong>
                <p className="text-muted-foreground">
                  Classic fit that follows the body's natural shape without being too tight or loose.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <strong className="text-foreground block mb-2">Slim Fit</strong>
                <p className="text-muted-foreground">
                  Tailored closer to the body for a sleek, modern silhouette.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <strong className="text-foreground block mb-2">Oversized</strong>
                <p className="text-muted-foreground">
                  Intentionally loose and roomy for a contemporary, relaxed aesthetic.
                </p>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          <div>
            <h3 className="font-serif text-xl mb-4">Care Instructions</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Dry clean recommended for tailored pieces and delicate fabrics</p>
              <p>• Hand wash cold for silk and cashmere items</p>
              <p>• Machine wash cold on gentle cycle for cotton and linen</p>
              <p>• Always check individual garment care labels</p>
              <p>• Store on padded hangers to maintain shape</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};